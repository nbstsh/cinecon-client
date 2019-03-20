import React, { Component } from 'react'
import movieManager from '../../modules/movie-manager'
import GenreBadge from '../genre/GenreBadge'
import GenresDisplay from './GenresDisplay'
import './MovieItem.css'

class MovieItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            releaseYear: '',
            genres: ''
        }
    } 
    componentDidMount() {
        movieManager.getMovie(this.props.id)
            .then(movie => this.setState(movie))
    }
    render() {
        const { title, releaseYear } = this.state

        // TODO replace with data
        const img = 'https://upload.wikimedia.org/wikipedia/en/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg'
     
        return(
            <div className="MovieItem" onClick={this.props.handleClick}>
                <figure>
                    <img src={img} />
                </figure>

                <h3><span>{title}</span></h3>
                <GenresDisplay  genres={this.state.genres} />
                
                {/* <h3>{title}</h3>
                <label>year:</label>
                <p>{releaseYear}</p>
                <label>genre:</label>
                <GenresDisplay  genres={this.state.genres} /> */}

                {/* <button onClick={this.props.handleClickShowDetail}>
                    show detail
                </button> */}
            </div>
        )
    }
}

export default MovieItem
