import React from 'react'
import ModalControll from './ModalControll'
import './SigninControll.css'
import Signin from '../Signin'
import { fetchUser, signoutUser, isSignedIn } from '../../modules/user'


class SigninControll extends ModalControll {
    constructor(props) {
        super(props) 
        this.state = {
            isSignedIn: false
        }
    }
    componentDidMount() {
        // make sure that user info has been fetched
        fetchUser()
            .then(() => this.setState({ isSignedIn: isSignedIn() }))
    }
    handleSigninClick = () => {
        this.openModal()
    }
    handleSignoutClick = () => {
        signoutUser()
        this.setState({ isSignedIn: false })
    }
    handleAfterSingin = () => {
        this.closeModal()
        this.setState({ isSignedIn: true })
    }
    render() {
        const isSignedIn = this.state.isSignedIn
        const onClickHandler = isSignedIn ? this.handleSignoutClick : this.handleSigninClick
        
        const button = (
            <button className="nav-item" onClick={onClickHandler}>
                {isSignedIn ? 'Signout' : 'Signin'}
            </button>
        )

        const modal =  this.generateModalBoilerplate({
            id: 'signin-form-modal',
            content: <Signin handleAfterSingin={this.handleAfterSingin}/>
        })

        return (
            <div className="SigninControll"> 
                {button}
                {modal}
            </div>
        )
    }
}

export default SigninControll