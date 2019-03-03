import React, { Component } from 'react'
import MovieDetail from './MovieDetail'
import { deleteRequest } from '../utils/request'
import config from '../config/index'
import MovieForm from './MovieForm';
const { api } = config

class MovieDetailBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            needsMovieForm: false
        }
    }
    deleteMovie = async () => {
        console.log('clicked')
        const res = await deleteRequest(`${api.movies}/${this.props.movieId}`, true)
        console.log('is Deleted?', res.ok)
    }
    handleToggleFormClick = () => {
        this.setState({ needsMovieForm: !this.state.needsMovieForm })
    }
    render() {
       return  this.state.needsMovieForm ? (
            <div>
                <MovieForm movieId={this.props.movieId} handleAfterSubmit={this.handleToggleFormClick}/>
                <button onClick={this.handleToggleFormClick}>Back</button>
            </div>
        ) : (
            <div>
                <MovieDetail movieId={this.props.movieId} />
                <button onClick={this.handleToggleFormClick}>EDIT</button>
                <button onClick={this.deleteMovie}>DELETE</button>
            </div>
        )
    }
}

export default MovieDetailBox