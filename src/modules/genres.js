import { getRequest, postRequest, putRequest, deleteRequest, handleResponse } from './request'
import config from '../config/index'
const { api } = config


const fetchGenres = async () => {
    const res = await getRequest(api.genres)
    return handleResponse(res, 'Fail to fetch genres.')
}

const fetchGenreById = async (id) => {
    const res = await getRequest(`${api.genres}/${id}`)
    return handleResponse(res, 'Fail to fetch genre.')
}

const postGenre = async (data) => {
    const res = await postRequest(api.genres, data, true)
    return handleResponse(res, 'Fail to create new genre.')
}

const putGenre = async (id, data) => {
    const res = await putRequest(`${api.genres}/${id}`, data, true)
    return handleResponse(res, 'Fail to update genre.')
}

const deleteGenre = async (id) => {
    const res = await deleteRequest(`${api.genres}/${id}`, true)
    return handleResponse(res, 'Fail to delete genre.')
}

const generateGenreOptions = (genres) => genres.map(genre => {
    return {
        key: genre._id,
        value: genre._id,
        text: genre.name
    }
})


export { fetchGenres, fetchGenreById, postGenre, putGenre, deleteGenre, generateGenreOptions }