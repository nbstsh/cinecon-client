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


export { fetchGenres, postGenre }