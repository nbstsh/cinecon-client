import React, { Component } from 'react'
import './MovieTheater.css'
import AudienceSeats from './AudienceSeats'


class MovieTheater extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className='MovieTheater'>
                <div className='surface screen'>screen</div>
                <div className='surface ceiling'>ceiling</div>
                <div className='surface wall-right'>right wall</div>
                <div className='surface wall-left'>left wall</div>
                <div className='surface floor'>floor</div>
                <div className='surface interface'></div>

                <AudienceSeats />
                
            </div>
        )
    }
}


export default MovieTheater