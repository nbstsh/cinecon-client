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

loadToken()

export { getToken, setToken, saveToken }