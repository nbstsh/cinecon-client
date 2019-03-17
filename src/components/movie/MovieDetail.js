import React, { Component } from 'react'
import './MovieDetail.css'
import movieManager from '../../modules/movie-manager'
import GenresDisplay from './GenresDisplay'


class MovieDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '', 
            director: '', 
            releaseYear: '', 
            genres: '', 
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
        const {title, director, releaseYear, genres, runningTime, starring, country} = this.state
        const genresDisplay = <GenresDisplay genres={genres} />

        return(
            <div className='MovieDetail'>
                <h1>{title}</h1>
                <ul>
                    <li><label>director:</label> {director}</li>
                    <li><label>releaseYear: </label>{releaseYear}</li>
                    <li><label>genre: </label>{genresDisplay}</li>
                    <li><label>runningTime: </label>{runningTime}</li>
                    <li><label>starring: </label>{starring}</li>
                    <li><label>country: </label>{country}</li> 
                </ul>
            </div>
        )
    }
}


export default MovieDetail