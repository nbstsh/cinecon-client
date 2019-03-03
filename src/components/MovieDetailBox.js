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
    handleDeleteMovie = async (event) => {
        const res = await deleteRequest(`${api.movies}/${this.props.movieId}`, true)
        if (res.ok) {
            this.props.removeMovie(this.props.movieId)
            document.querySelector('#MovieDetailcloseBtn').click()
        }
    }
    handleToggleFormClick = (event) => {
        this.setState({ needsMovieForm: !this.state.needsMovieForm })
    }
    render() {
       return  this.state.needsMovieForm ? (
            <div>
                <MovieForm 
                    movieId={this.props.movieId} 
                    handleAfterSubmit={this.handleToggleFormClick}
                    updateMovie={this.props.updateMovie}
                />
                <button onClick={this.handleToggleFormClick}>Back</button>
            </div>
        ) : (
            <div>
                <MovieDetail movieId={this.props.movieId} />
                <button onClick={this.handleToggleFormClick}>EDIT</button>
                <button onClick={this.handleDeleteMovie}>DELETE</button>
                <button id="MovieDetailcloseBtn" onClick={this.props.handleShowDetail}>close</button>
            </div>
        )
    }
}

export default MovieDetailBox