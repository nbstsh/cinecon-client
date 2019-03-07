import { getToken } from './token'


const presetInit = (method, data = null) => {
     return {
        method,
        mode: "cors",
        cache: "no-cache", 
        headers: { "Content-Type": "application/json" },
        body: data && JSON.stringify(data)
    }
}

const initToken = (init) => {
    const token = getToken()
    if (!token) return 

    init.headers['x-auth-token'] = token
}

// GET request to given url with body embeded with given data.
// if needsToken is true, x-auth-token is set with jwt in localStorage
const getRequest = (url, needsToken = false) => {
    const init = presetInit("GET")
    if (needsToken) initToken(init)

    return fetch(url, init)
}

// POST request to given url with body embeded with given data.
// if needsToken is true, x-auth-token is set with jwt in localStorage
const postRequest = (url, data, needsToken = false) => {
    const init = presetInit("POST", data)
    if (needsToken) initToken(init)

    return fetch(url, init)
}

// PUT request to given url with body embeded with given data
// if needsToken is true, x-auth-token is set with jwt in localStorage
const putRequest = (url, data, needsToken = false) => {
    const init = presetInit("PUT", data)
    if (needsToken) initToken(init)

    return fetch(url, init)
}

// PUT request to given url
// if needsToken is true, x-auth-token is set with jwt in localStorage
const deleteRequest = (url, needsToken = false) => {
    const init = presetInit("DELETE")
    if (needsToken) initToken(init)

    return fetch(url, init)
}


export  { getRequest, postRequest, putRequest, deleteRequest }

