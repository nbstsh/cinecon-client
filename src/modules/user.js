import { getToken } from './token'
import { getRequest } from './request'
import config from '../config/index'


let user

const fetchUser = async () => {
    const res = await getRequest(config.api.user, true)
    if (!res.ok) {
        throw new Error('Fail to fetch user')
    }
    user = await res.json()
    return user
}

const getUser = () => user

fetchUser()

export { fetchUser, getUser }

