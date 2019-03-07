import React, { Component } from 'react'
import ErrorMessage from './ErrorMessage'
import './Signin.css'
import { fetchToken } from '../modules/token'
import userManager from '../modules/user-manager'


class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage: ''
        }
    }
    submit = async (e) => {
        e.preventDefault()

        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const successHandler = (token) => {
            // signinUser(token)
            userManager.signinUser(token)
            this.setState({ errorMessage: '' })
            this.props.handleAfterSingin()
        }

        fetchToken(data)
            .then(successHandler)
            .catch(err => this.setState({ errorMessage: err.message }))
    }
    render(){
        return (
            <div className="Signin">
                <h2>Signin Form</h2>
                <ErrorMessage message={this.state.errorMessage} /> 
                <form onSubmit={this.submit}>
                    <label>email</label>
                    <input name="email" type="text" placeholder="email"/>
                    <label>password</label>
                    <input name="password" type="password" placeholder="password"/>
                    <button>submit</button>
                </form>
            </div>
        )
    }

}

export default Signin 