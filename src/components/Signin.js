import React, { Component } from 'react'
import { postRequest } from '../utils/request'
import ErrorMessage from './ErrorMessage'
import config from '../config/index'
const { api } = config

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignedin: false,
            errorMessage: ''
        }
    }
    submit = async (e) => {
        e.preventDefault()

        const token = await this.fetchToken({
            email: e.target.email.value,
            password: e.target.password.value
        })

        if (!token) return 

        localStorage.setItem('jwt', token)
        this.setState({ 
            isSignedin: true,
            errorMessage: ''
        })
    }
    async fetchToken(data) {
        const res = await postRequest(api.auth, data)

        if (!res.ok) {
            const errorMessage = await res.text()
            this.setState({ errorMessage})
            return null
        }
        
        return res.text()   
    }
    render(){
        const errorMessage = this.state.errorMessage ? 
            <div>{this.state.errorMessage}</div> : null

        return (
            <div>
                <ErrorMessage message={this.state.errorMessage} /> 
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