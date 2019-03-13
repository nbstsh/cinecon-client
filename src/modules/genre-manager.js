import EventEmitter from 'events'
import { getRequest, postRequest, putRequest, deleteRequest, handleResponse } from './request'
import createIdbKeyval from './idb-keyval'
import config from '../config/index'
const { api, idb } = config
const idbKeyval = createIdbKeyval(idb.objectStoreNames.genres)


class GenreManager extends EventEmitter {
    constructor() {
        super()
        this.UPDATE_IDB_EVENT='updateIdb'
    }
    // api
    async fetchGenres(){
        const res = await getRequest(api.genres)
        return handleResponse(res, 'Fail to fetch genres.')
    }
    
    async fetchGenreById(id){
        const res = await getRequest(`${api.genres}/${id}`)
        return handleResponse(res, 'Fail to fetch genre.')
    }
    
    async postGenre(data){
        const res = await postRequest(api.genres, data, true)
        return handleResponse(res, 'Fail to create new genre.')
    }
    
    async putGenre(id, data){
        const res = await putRequest(`${api.genres}/${id}`, data, true)
        return handleResponse(res, 'Fail to update genre.')
    }
    
    async deleteGenreRequest(id){
        const res = await deleteRequest(`${api.genres}/${id}`, true)
        return handleResponse(res, 'Fail to delete genre.')
    }
    //indexedDB
    async getGenres() {
        return await idbKeyval.getAll()
    }
    async getGenre(id) {
        return await idbKeyval.get(id)
    }
    async getIds() {
        return await idbKeyval.keys()
    }
    async setGenre(genre) {
        await idbKeyval.set(genre)
        this.emit(this.UPDATE_IDB_EVENT, { genre })
    }
    async deleteGenreInIndexDb(id) {
        await idbKeyval.delete(id)
        this.emit(this.UPDATE_IDB_EVENT)
    }
    async clearGenres() {
        await idbKeyval.clear()
        this.emit(this.UPDATE_IDB_EVENT)
    }
    // api & IndexedDB
    async fetchAndSetGenres() {
        const genres = await this.fetchGenres()
        await Promise.all(genres.map(g => this.setGenre(g)))
        return genres
    }
    async postAndSetGenre(data) {
        const genre = await this.postGenre(data)
        await this.setGenre(genre)
        return genre
    }
    async putAndSetGenre(id, data) {
        const genre = await this.putGenre(id, data)
        await this.setGenre(genre)
        return genre
    }
    async deleteGenre(id) {
        await this.deleteGenreRequest(id)
        await this.deleteGenreInIndexDb(id)
    }
    // util
    generateGenreOptions(genres) {
        return genres.map(genre => ({
            key: genre._id,
            value: genre._id,
            text: genre.name
        }))
    }
}

const genreManager = new GenreManager()


export default genreManager
