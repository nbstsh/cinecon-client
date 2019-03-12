import React from 'react'
import ModalControll from '../common/ModalControll'
import './SigninControll.css'
import Signin from '../Signin'
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
        // signoutUser()
        userManager.signoutUser()
        // this.setState({ isSignedIn: false })
    }
    handleAfterSingin = () => {
        this.closeModal()
        // this.setState({ isSignedIn: true })
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