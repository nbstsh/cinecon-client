import React from 'react'
import ModalControll from './ModalControll'
import Signin from '../Signin'


class SigninControll extends ModalControll {
    constructor(props) {
        super(props) 
        this.state = {
            isSignedIn: false
        }
    }
    componentDidMount() {
        const token = localStorage.getItem('jwt')
        this.setState({ isSignedIn: token !== null })
    }
    handleSigninClick = () => {
        this.openModal()
    }
    handleSignoutClick = () => {
        localStorage.removeItem('jwt')
        this.setState({ isSignedIn: false })
    }
    handleAfterSingin = () => {
        this.closeModal()
        this.setState({ isSignedIn: true })
    }
    render() {
        const isSignedIn = this.state.isSignedIn
        const button = (
            <button className="nav-item" onClick={isSignedIn ? this.handleSignoutClick : this.handleSigninClick}>
                {isSignedIn ? 'Signout' : 'Signin'}
            </button>
        )

        const modal =  this.generateModalBoilerplate({
            id: 'signin-form-modal',
            content: <Signin handleAfterSingin={this.handleAfterSingin}/>
        })

        return (
            <div style={{ height: '100%'}}> 
                {button}
                {modal}
            </div>
        )
    }
}

export default SigninControll