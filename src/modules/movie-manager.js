import EventEmitter from 'events'
import { getRequest, postRequest, putRequest, deleteRequest, handleResponse } from './request'
import createIdbKeyval from './idb-keyval'
import config from '../config/index'
import { setFilter, needInFilteredMovies } from './movie-filter'
const { api, idb } = config
const idbKeyval = createIdbKeyval(idb.objectStoreNames.movies)


class MovieManager extends EventEmitter {
    constructor() {
        super()
        this.UPDATE_IDB_EVENT = 'updateIDB'
        this.UPDATE_FILTER_EVENT = 'updateFilter'
    }
    // api
    async fetchMovies() {
        const res = await getRequest(api.movies)
        return handleResponse(res, 'Fail to fetch movies.')
    }
    async fetchMovieById(id) {
        const res = await getRequest(`${api.movies}/${id}`)
        return handleResponse(res, 'Fail to fetch a movie with given id.')
    }
    async postMovie(data) {
        const res = await postRequest(api.movies, data, true)
        return handleResponse(res, 'Fail to create new movies.')
    }
    async putMovie(id, data){
        const res = await putRequest(`${api.movies}/${id}`, data, true)
        return handleResponse(res, 'Fail to update movie.')
    } 
    async deleteMovieRequest(id){
        const res = await deleteRequest(`${api.movies}/${id}`, true)
        return handleResponse(res, 'Fail to delete movie.')
    }
    // IndexedDB
    async getMovies() {
        return await idbKeyval.getAll()
    }
    async getMovie(id) {
        return await idbKeyval.get(id)
    }
    async getIds() {
        return await idbKeyval.keys()
    }
    async setMovie(movie) {
        await idbKeyval.set(movie)
        this.emit(this.UPDATE_IDB_EVENT, { movie })
    }
    async deleteMovieInIndexDb(id) {
        await idbKeyval.delete(id)
        this.emit(this.UPDATE_IDB_EVENT, { movie: null })
    }
    async clearMovies() {
        await idbKeyval.clear()
        this.emit(this.UPDATE_IDB_EVENT)
    }
    // api & IndexedDB
    async fetchAndSetMovies() {
        const movies = await this.fetchMovies()
        await Promise.all(movies.map(m => this.setMovie(m)))
        return movies
    }
    async postAndSetMovie(data) {
        let movie = await this.postMovie(data)
        movie = await this.fetchMovieById(movie._id) // needs to populate genre
        await this.setMovie(movie)
        return movie
    }
    async putAndSetMovie(id, data) {
        let movie = await this.putMovie(id, data)
        movie = await this.fetchMovieById(movie._id) // needs to populate genre
        await this.setMovie(movie)
        return movie
    }
    async deleteMovie(id) {
        await this.deleteMovieRequest(id)
        await this.deleteMovieInIndexDb(id)
    }
    // filter 
    updateFilter(update) {
        setFilter(update)
        this.emit(this.UPDATE_FILTER_EVENT)
    }
    //util
    async generateFilteredMovies() {
        const movies =  await this.getMovies()

        return movies
            .map(movie => Object.assign(movie, { genre: movie.genre._id }))// to replace genre with gerne objectId
            .filter(needInFilteredMovies)
    }
    async generateFilteredMovieIds() {
        const filteredMovies =  await this.generateFilteredMovies()
        return filteredMovies.map(m => m._id)
    }
}

const movieManager = new MovieManager()


export default movieManager