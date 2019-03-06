import React, { Component } from 'react'


class LoginControll extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isLoggedIn: false
        }
    }
    handleLoginClick = () => {
        alert('login')
    }
    handleLogoutClick = () => {
        alert('logout')
    }
    render() {
        return this.state.isLoggedIn ? 
            <LogoutButton onClick={this.handleLogoutClick} /> :
            <LoginButton onClick={this.handleLoginClick}/>
    }
}

function LoginButton({onClick}) {
    return <button onClick={onClick}>Login</button>
}

function LogoutButton({onClick}) {
    return <button onClick={onClick}>Logout</button>
}

export default LoginControll