import { getRequest, postRequest, putRequest, deleteRequest } from './request'
import config from '../config/index'
const { api } = config


const fetchGenres = async () => {
    const res = await getRequest(api.genres)
    if (!res.ok) {
        const err = await res.text()
        throw new Error(err || 'Fail to fetch genres.')
    }
    return await res.json()
}

const postGenre = async (data) => {
    const res = await postRequest(api.genres, data, true)
    if (!res.ok) {
        const err = await res.text() 
        throw new Error(err || 'Fail to create new genre.')
    }
    return await res.json()
}

const putGenre = async (id, data) => {
    const res = await putRequest(`${api.genres}/${id}`, data, true)
    if (!res.ok) {
        const err = await res.text()
        throw new Error(err || 'Fail to update new Genre.')
    }
    return await res.json()
}

const deleteGenre = async (id) => {
    const res = await deleteRequest(`${api.genres}/${id}`, true)
    if (!res.ok) {
        const err = await res.text()
        throw new Error(err || 'Fail to delete genre.')
    }
    return await res.json()
}

const generateGenreOptions = (genres) => genres.map(genre => {
    return {
        key: genre._id,
        value: genre._id,
        text: genre.name
    }
})


export { fetchGenres, postGenre, putGenre, deleteGenre, generateGenreOptions }