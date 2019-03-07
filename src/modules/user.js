import { getRequest } from './request'
import { saveToken, clearToken } from './token'
import config from '../config/index'


let user = null

const fetchUser = async () => {
    const res = await getRequest(config.api.user, true)
    if (!res.ok) {
        const err = await res.text()
        throw new Error(err || 'Fail to fetch user.')
    }

    user = await res.json()
    return user
}

const getUser = () => user

const signinUser = (token) => {
    saveToken(token)
    fetchUser()
        .then(u => user = u)
        .catch((err) => {
            console.error(err)
            user = null})
}

const signoutUser = () => {
    clearToken()
    user = null
}

//TODO: 
// token が存在するがuser はfetchされていないときに falseになる
const isSignedIn = () => user !== null

const isAdminUser = () => user && user.isAdmin 

fetchUser().catch(() => user = null)


export { fetchUser, getUser, signinUser, signoutUser, isSignedIn, isAdminUser }

