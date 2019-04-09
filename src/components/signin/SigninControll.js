import React from 'react'
import ModalControll from '../common/ModalControll'
import './SigninControll.css'
import Signin from './Signin'
import userManager from '../../modules/user-manager'
import firebase from '../../modules/firebase-init'
const hash = window.location.hash

class SigninControll extends ModalControll {
    constructor(props) {
        super(props) 
        this.state = {
            needShowSigninTab: hash === '#admin',
            isSignedIn: false,
            isModalOpen: false
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
        if (userManager.isAdminUser()) {
            firebase.auth().signOut()
        }
        userManager.signoutUser()
        window.location.reload()
    }
    handleAfterSingin = () => {
        this.closeModal()
        window.location.reload()
    }
    render() {
        const { isSignedIn, needShowSigninTab} = this.state
        if (!isSignedIn && !needShowSigninTab) return null

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