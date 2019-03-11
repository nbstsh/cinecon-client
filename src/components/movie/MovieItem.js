import React, { Component } from 'react'
import movieManager from '../../modules/movie-manager'
import GenreBadge from '../genre/GenreBadge'

class MovieItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
            title: '',
            releaseYear: '',
            genre: {}
        }
    } 
    componentDidMount() {
        movieManager.getMovie(this.props.id)
            .then(movie => this.setState(movie))
    }
    render() {
        const { _id, title, releaseYear, genre } = this.state
        const genreBadge = genre ? <GenreBadge name={genre.name} color={genre.color} /> : null

        //TODO replace 
        const handleShowDetail = () => {}

        return(
            <div className="MovieItem">
                <h3>{title}</h3>
                <label>year:</label>
                <p>{releaseYear}</p>
                <label>genre:</label>
                <div>{genreBadge}</div>
                <button data-id={_id} onClick={handleShowDetail}>show detail</button>
            </div>
        )
    }
}

export default MovieItem
