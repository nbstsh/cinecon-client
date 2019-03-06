import React from 'react'
import ModalControll from './ModalControll'
import Signin from '../Signin'


class SigninControll extends ModalControll {
    constructor(props) {
        super(props) 
        this.state = {
            isLoggedIn: false
        }
    }
    handleSigninClick = () => {
        this.openModal()
    }
    handleSignoutClick = () => {
        alert('Signout')
    }
    render() {
        const button = this.state.isLoggedIn ? 
            <SignoutButton onClick={this.openModal} /> :
            <SigninButton onClick={this.handleSigninClick}/>

        const modal =  this.generateModalBoilerplate(<Signin />)

        return (
            <div style={{ height: '100%'}}> 
                {button}
                {modal}
            </div>
        )
    }
}

function SigninButton({onClick}) {
    return <button onClick={onClick}>Signin</button>
}

function SignoutButton({onClick}) {
    return <button onClick={onClick}>Signout</button>
}

export default SigninControll