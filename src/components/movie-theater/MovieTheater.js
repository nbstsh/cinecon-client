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
        window.addEventListener('mousemove', this.handleMousemove)
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMousemove)
        window.removeEventListener('scroll', this.handleScroll)
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
    handleScroll(e) {
        const y = window.scrollY;
        console.log(y)
    }
    render() {
        return (
            <div className='MovieTheater'>
                <div className='surface screen'>
                    <MovieDetail id='5c850e5e98816fd277b372d1' />
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