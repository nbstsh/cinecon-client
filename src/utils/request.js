

const init = {
    method: "POST",
    mode: "cors",
    cache: "no-cache", 
    headers: { "Content-Type": "application/json" },
    body: null
}

const initToken = () => {
    const token = localStorage.getItem('jwt')
    if (!token) return 

    init.headers['x-auth-token'] = token
    console.log(init.headers)
}

const initBody = (data) => {
    init.body = JSON.stringify(data)
}


// POST request to given url with body embeded with given data.
// if needsToken is true, x-auth-token is set with jwt in localStorage
const postData = (url, data, needsToken = false) => {
    initBody(data)
    console.log({needsToken})
    if (needsToken) initToken()

    return fetch(url, init)
}

// PUT request to given url with body embeded with given data
// if needsToken is true, x-auth-token is set with jwt in localStorage
const putData = (url, data, needsToken = false) => {
    init.method = "PUT"
    initBody(data)
    if (needsToken) initToken()

    return fetch(url, init)
}

// PUT request to given url
// if needsToken is true, x-auth-token is set with jwt in localStorage
const deleteData = (url, needsToken = false) => {
    init.method = "DELETE"
    if (needsToken) initToken()

    return fetch(url, init)
}


module.exports = {
    postData,
    putData,
    deleteData
}

