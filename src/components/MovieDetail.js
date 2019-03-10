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
                    <li><label>director:</label> {director}</li>
                    <li><label>releaseYear: </label>{releaseYear}</li>
                    <li><label>genre: </label>{genre}</li>
                    <li><label>runningTime: </label>{runningTime}</li>
                    <li><label>starring: </label>{starring}</li>
                    <li><label>country: </label>{country}</li> 
                </ul>
                {/* <div>
                    <label>director:</label> 
                    <span>{director}</span>
                    <label>releaseYear: </label>
                    <span>{releaseYear}</span>
                    <label>genre: </label>
                    <span>{genre}</span>
                    <label>runningTime: </label>
                    <span>{runningTime}</span>
                    <label>starring: </label>
                    <span>{starring}</span>
                    <label>country: </label>
                    <span>{country}</span>
                </div> */}
            </div>
        ) 
    }
}


export default MovieDetail