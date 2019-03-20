import React, { Component } from 'react'
import './MovieTheater.css'
import AudienceSeats from './AudienceSeats'
import MovieDetail from '../movie/MovieDetail'


const MAX_X_DEG = 10
const MAX_Y_DEG = 10


class MovieTheater extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        if (this.props.needMousemove) {
            window.addEventListener('mousemove', this.handleMousemove)
        }
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMousemove)
    }
    handleMousemove(e) {
        const baseWidth = window.innerWidth / 2
        const baseHeight = window.innerHeight / 2
        const x = e.clientX;
        const y = e.clientY;
        const ydeg = MAX_X_DEG * (x - baseWidth) / baseWidth
        const xdeg = MAX_Y_DEG * (y - baseHeight) / baseHeight * -1
        const el = document.querySelector('.MovieTheater')
        el.style.setProperty('--rotateX', `rotateX(${xdeg}deg)`)
        el.style.setProperty('--rotateY', `rotateY(${ydeg}deg)`)
    }
    render() {
        return (
            <div className='MovieTheater'>
                <div className='surface screen'>
                    <div className='screen-content'>
                        {this.props.content}
                    </div>
                </div>
                <div className='surface ceiling'></div>
                <div className='surface wall-right'></div>
                <div className='surface wall-left'></div>
                <div className='surface floor'></div>
                <div className='surface interface'></div>

                <AudienceSeats />
                
            </div>
        )
    }
}


export default MovieTheater