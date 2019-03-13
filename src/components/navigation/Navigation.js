import React, { Component } from 'react'
import SigninControll from '../signin/SigninControll'
import './Navigation.css'
import UserInfo from './UserInfo'


class Navigation extends Component {    
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <nav className="Navigation">
                <div className="wrap">
                    <div className="left">
                        <h2 className="title">Cinecoya Bookshelf</h2>
                    </div>
                    <div className="right">
                        <UserInfo />
                        <SigninControll />
                    </div>
                </div>
            </nav>
        )
    }
}


export default Navigation