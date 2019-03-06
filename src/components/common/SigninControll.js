import React from 'react'
import ModalControll from './ModalControll'
import './SigninControll.css'
import Signin from '../Signin'
import { clearToken } from '../../modules/token'
import { getUser } from '../../modules/user'


class SigninControll extends ModalControll {
    constructor(props) {
        super(props) 
        this.state = {
            isSignedIn: false
        }
    }
    componentDidMount() {
        const user = getUser()
        this.setState({ isSignedIn: user !== null })
    }
    handleSigninClick = () => {
        this.openModal()
    }
    handleSignoutClick = () => {
        clearToken()
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