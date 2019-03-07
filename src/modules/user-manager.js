import EventEmitter from 'events'
import { getRequest } from './request'
import { setToken, saveToken, clearToken } from './token'
import config from '../config/index'


class UserManager extends EventEmitter {
    constructor() {
        super()
        this.user = null
    }
    async fetchUser() {
        const res = await getRequest(config.api.user, true)
        if (!res.ok) {
            const err = await res.text()
            throw new Error(err || 'Fail to fetch user.')
        }
        return await res.json()
    }
    getUser() {
        return this.user
    }
    setUser(u) {
        this.user = u
        this.emit('userUpdated', { user: u })
    }
    signinUser(token){
        setToken(token)
        saveToken()
        this.fetchUser()
            .then(u => this.setUser(u))
            .catch(() => this.setUser(null))
    }
    signoutUser() {
        clearToken()
        this.setUser(null)
    }
    isSignedIn() {
        return this.user !== null
    }
    isAdminUser() {
        return this.user && this.user.isAdmin
    }
}


const userManager = new UserManager()
userManager.fetchUser()
    .then(user => userManager.setUser(user))
    .catch((err) => userManager.setUser(null))


export default userManager

