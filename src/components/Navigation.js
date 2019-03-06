import React, { Component } from 'react'
import LoginControll from './common/LoginControll'
import './Navigation.css'


class Navigation extends Component {    
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <nav class="Navigation">
                <div class="wrap">
                    <div class="left">
                        <h2>Cinekoya Bookshelf</h2>
                    </div>
                    <div class="right">
                        <LoginControll />
                    </div>
                </div>
            </nav>
        )
    }
}


export default Navigation