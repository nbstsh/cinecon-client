import React, { Component } from 'react'
import movieManager from '../../modules/movie-manager'
import GenreBadge from '../genre/GenreBadge'
import './MovieItem.css'

class MovieItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            releaseYear: '',
            genre: ''
        }
    } 
    componentDidMount() {
        movieManager.getMovie(this.props.id)
            .then(movie => this.setState(movie))
    }
    render() {
        const { title, releaseYear, genre } = this.state
        const genreBadge = genre ? 
            <GenreBadge name={genre.name} color={genre.color} /> : 
            <p style={{color: 'var(--color-grey-dark-2)'}}>none</p>
        
        return(
            <div className="MovieItem">
                <h3>{title}</h3>
                <label>year:</label>
                <p>{releaseYear}</p>
                <label>genre:</label>
                <div>{genreBadge}</div>

                <button onClick={this.props.handleClickShowDetail}>
                    show detail
                </button>
            </div>
        )
    }
}

export default MovieItem
