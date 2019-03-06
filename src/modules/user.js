import { getRequest } from './request'
import config from '../config/index'


let user

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


fetchUser().catch(() => user = null)

export { fetchUser, getUser }

