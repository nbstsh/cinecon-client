import React, { Component } from 'react'
import './UserInfo.css'
import userManager from '../../modules/user-manager'

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.setState({ user: userManager.getUser() })

        userManager.on(userManager.UPDATE_EVENT, ({ user }) => {
            this.setState({ user })
        })
    }

    render() {
        if (!this.state.user) return null

        return (
            <div className="UserInfo">
                <span>{this.state.user.name}</span>
            </div>
        )
    }
}

export default UserInfo