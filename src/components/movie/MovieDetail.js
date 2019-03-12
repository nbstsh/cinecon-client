import React, { Component } from 'react'
import './MovieDetail.css'
import movieManager from '../../modules/movie-manager'


class MovieDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '', 
            director: '', 
            releaseYear: '', 
            genre: '', 
            runningTime: '', 
            starring: '', 
            country: ''
        }
    }
    componentDidMount() {
        movieManager.getMovie(this.props.id)
            .then(movie => this.setState(movie))
    }
    render() {
        const {title, director, releaseYear, genre, runningTime, starring, country} = this.state
        const genreName = genre ? genre.name : '';

        return(
            <div className='MovieDetail'>
                <h1>{title}</h1>
                <ul>
                    <li><label>director:</label> {director}</li>
                    <li><label>releaseYear: </label>{releaseYear}</li>
                    <li><label>genre: </label>{genreName}</li>
                    <li><label>runningTime: </label>{runningTime}</li>
                    <li><label>starring: </label>{starring}</li>
                    <li><label>country: </label>{country}</li> 
                </ul>
            </div>
        )
    }
}


export default MovieDetail