import { postRequest } from './request'
import config from '../config/index'

const TOKEN_KEY = 'jwt'

let token

const getToken = () => token

const setToken = (t) => token = t

const loadToken = () => {
    token = localStorage.getItem(TOKEN_KEY)
}

const saveToken = () => {
    localStorage.setItem(TOKEN_KEY, token)
}

const clearToken = () => {
    token = null
    localStorage.removeItem(TOKEN_KEY)
}

/**
 * data = { email, password }
 */
const fetchToken = async (data) => {
    const res = await postRequest(config.api.auth, data)

    if (!res.ok) {
        const err = await res.text()
        throw new Error(err || 'Something went wrong.')
    }
    
    return res.text()   
}

loadToken()

export { getToken, setToken, saveToken, fetchToken, clearToken }