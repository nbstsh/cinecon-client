import React, { Component } from 'react'
import './MovieTheater.css'


class MovieTheater extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className='MovieTheater'>
                <section className='ScreenContainer'>
                    <div className='surface screen'>1</div>
                    <div className='surface ceiling'>2</div>
                    <div className='surface wall-right'>3</div>
                    <div className='surface wall-left'>4</div>
                    <div className='surface floor'>5</div>
                    <div className='surface interface'></div>
                </section>
            </div>
        )
    }
}


export default MovieTheater