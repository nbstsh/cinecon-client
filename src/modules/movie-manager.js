import EventEmitter from 'events'
import { getRequest, postRequest, putRequest, deleteRequest, handleResponse } from './request'
import createIdbKeyval from './idb-keyval'
import config from '../config/index'
const { api } = config
const idbKeyval = createIdbKeyval('movies')


class MovieManager extends EventEmitter {
    constructor() {
        super()
    }
    // api
    async fetchMovies() {
        const res = await getRequest(api.movies)
        return handleResponse(res, 'Fail to fetch movies.')
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
    async setMovie(id, movie) {
        this.emit('updateIdb', { id, movie })
        return await idbKeyval.set(id, movie)
    }
    async deleteMovieInIndexDb(id) {
        this.emit('updateIdb', { id, movie: null })
        return await idbKeyval.delete(id)
    }
    async clearMovies() {
        this.emit('updateIdb')
        return await idbKeyval.clear()
    }
    // api & IndexedDB
    async fetchAndSetMovies() {
        const movies = await this.fetchMovies()
        await Promise.all(movies.map(m => this.setMovie(m._id, m)))
        return movies
    }
    async postAndSetMovie(data) {
        const movie = await this.postMovie(data)
        await this.setMovie(movie._id, movie)
        return movie
    }
    async putAndSetMovie(id, data) {
        const movie = await this.putMovie(id, data)
        await this.setMovie(movie._id, movie)
        return movie
    }
    async deleteMovie(id) {
        await this.deleteMovieRequest(id)
        await this.deleteMovieInIndexDb(id)
    }
}



export default MovieManager