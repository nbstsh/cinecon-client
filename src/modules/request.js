import { getToken } from './token'

const init = {
    method: "GET",
    mode: "cors",
    cache: "no-cache", 
    headers: { "Content-Type": "application/json" },
    body: null
}

const initToken = () => {
    const token = getToken()
    if (!token) return 

    init.headers['x-auth-token'] = token
}

const initBody = (data) => {
    init.body = JSON.stringify(data)
}


// GET request to given url with body embeded with given data.
// if needsToken is true, x-auth-token is set with jwt in localStorage
const getRequest = (url, needsToken = false) => {
    if (needsToken) initToken()

    return fetch(url, init)
}

// POST request to given url with body embeded with given data.
// if needsToken is true, x-auth-token is set with jwt in localStorage
const postRequest = (url, data, needsToken = false) => {
    init.method = "POST"
    initBody(data)
    if (needsToken) initToken()

    return fetch(url, init)
}

// PUT request to given url with body embeded with given data
// if needsToken is true, x-auth-token is set with jwt in localStorage
const putRequest = (url, data, needsToken = false) => {
    init.method = "PUT"
    initBody(data)
    if (needsToken) initToken()

    return fetch(url, init)
}

// PUT request to given url
// if needsToken is true, x-auth-token is set with jwt in localStorage
const deleteRequest = (url, needsToken = false) => {
    init.method = "DELETE"
    if (needsToken) initToken()

    return fetch(url, init)
}


export  { getRequest, postRequest, putRequest, deleteRequest }

