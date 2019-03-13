import React from 'react'
import ModalControll from '../common/ModalControll'
import './SigninControll.css'
import Signin from './Signin'
import userManager from '../../modules/user-manager'


class SigninControll extends ModalControll {
    constructor(props) {
        super(props) 
        this.state = {
            isSignedIn: false
        }
    }
    componentDidMount() {
        userManager.on(userManager.UPDATE_EVENT, () => {
            this.setState({ isSignedIn: userManager.isSignedIn() })
        })
        
    }
    handleSigninClick = () => {
        this.openModal()
    }
    handleSignoutClick = () => {
        userManager.signoutUser()
    }
    handleAfterSingin = () => {
        this.closeModal()
    }
    render() {
        const isSignedIn = this.state.isSignedIn
        const handleClick = isSignedIn ? this.handleSignoutClick : this.handleSigninClick
        
        const tab = (
            <span className="nav-item">
                {isSignedIn ? 'Signout' : 'Signin'}
            </span>
        )

        const modal =  this.generateModalBoilerplate({
            id: 'signin-form-modal',
            content: <Signin handleAfterSingin={this.handleAfterSingin}/>
        })

        return (
            <div className="SigninControll"  onClick={handleClick}> 
                {tab}
                {modal}
            </div>
        )
    }
}

export default SigninControll