import EventEmitter from 'events'
import { getRequest } from './request'
import { saveToken, clearToken } from './token'
import config from '../config/index'


class UserManager extends EventEmitter {
    constructor() {
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
        this.emit('userUpdated', { user: u })
        this.user = u
    }
    signinUser(token){
        saveToken(token)
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
    .catch(() => userManager.setUser(null))


export default userManager

