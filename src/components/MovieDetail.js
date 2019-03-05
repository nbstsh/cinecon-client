import React, { Component } from 'react'
import config from '../config/index'
import './MovieDetail.css'
const { api } = config


class MovieDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
    }
    componentDidMount() {
        if (!this.props.movieId) return 

        // TODO create api module & error handling
        fetch(`${api.movies}/${this.props.movieId}`)
            .then(res => {
                if (res.ok) return res.json()
                throw new Error(res)
            })
            .then(movie => this.setState({ movie }))
            .catch(err => console.log(err))
    }
    render() {
        const {title, director, releaseYear, genre, runningTime, starring, country} = this.state.movie
        
        return (
            <div className="MovieDetail">
                <h1>{title}</h1>
                <ul>
                    <li>director: {director}</li>
                    <li>releaseYear: {releaseYear}</li>
                    <li>genre: {genre}</li>
                    <li>runningTime: {runningTime}</li>
                    <li>starring: {starring}</li>
                    <li>country: {country}</li> 
                </ul>
            </div>
        ) 
    }
}


export default MovieDetail