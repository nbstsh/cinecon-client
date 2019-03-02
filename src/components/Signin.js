import React, { Component } from 'react'
import config from '../config/development'
const { api } = config

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignedin: false
        }
    }
    submit = async (e) => {
        e.preventDefault()
        if (this.state.isSignedin) return 

        const token = await this.fetchToken({
            email: e.target.email.value,
            password: e.target.password.value
        })

        if (!token) return 

        localStorage.setItem('jwt', token)
        this.setState({ isSignedin: true })
    }
    fetchToken(data) {
        const init = {
            method: "POST",
            mode: "cors",
            cache: "no-cache", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }

        return fetch(api.auth, init)
            .then((res) => res.text())
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>
                        email:
                        <input name="email" type="text" />
                    </label>
                    <label>
                        password: 
                        <input name="password" type="password" />
                    </label>
                    <button>submit</button>
                </form>
            </div>
        )
    }

}

export default Signin 