

const init = {
    method: "POST",
    mode: "cors",
    cache: "no-cache", 
    headers: { "Content-Type": "application/json" },
    body: null
}

const postData = (url, data) => {
    init.body = JSON.stringify(data)
    return fetch(url, init)
}

const putData = (url, data) => {
    init.method = "PUT"
    init.body = JSON.stringify(data)
    return fetch(url, init)
}

const deleteData = (url) => {
    init.method = "DELETE"
    return fetch(url, init)
}


module.exports = {
    postData,
    putData,
    deleteData
}

