import React, { Component } from 'react'
import ErrorMessage from '../common/ErrorMessage'
import './Signin.css'
import { fetchToken } from '../../modules/token'
import userManager from '../../modules/user-manager'
import firebase from '../../modules/firebase-init'


class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage: ''
        }
    }
    submit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const data = { email, password}

        const handleSuccess = async (token) => {
            // signinUser(token)
            await userManager.signinUser(token)
            this.setState({ errorMessage: '' })
            this.props.handleAfterSingin()
        }

        const handleAdminUser = () => {
            if (!userManager.isAdminUser()) return 
            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .catch(err => {
                    userManager.signoutUser()// if there is an error, make sure that user is logged out
                    throw new Error(err)
                })
        }

        fetchToken(data)
            .then(handleSuccess)
            .then(handleAdminUser)
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