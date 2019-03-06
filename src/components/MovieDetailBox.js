import React, { Component } from 'react'
import MovieDetail from './MovieDetail'
import { deleteRequest } from '../modules/request'
import config from '../config/index'
import MovieForm from './MovieForm';
import CloseBtn from './common/CloseBtn'
import './MovieDetailBox.css'
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
    toggleNeedsMovieForm = () => {
        this.setState({ needsMovieForm: !this.state.needsMovieForm })
    }
    render() {
        const handleAfterSubmit = function(movie){
            this.toggleNeedsMovieForm()
            this.updateMovie(movie)
        }

        return  this.state.needsMovieForm ? (
            <div className="MovieDetailBox">
                <MovieForm 
                    movieId={this.props.movieId} 
                    handleAfterSubmit={((movie) => {
                        this.toggleNeedsMovieForm()
                        this.props.updateMovie(movie)
                    })}
                    handleCancelClick={this.toggleNeedsMovieForm}
                />
                <CloseBtn handleClick={this.props.handleShowDetail} />
            </div>
        ) : (
            <div className="MovieDetailBox">
                <MovieDetail movieId={this.props.movieId} />
                <div className="btn-box">
                    <button onClick={this.toggleNeedsMovieForm}>EDIT</button>
                    <button onClick={this.handleDeleteMovie}>DELETE</button>
                </div>
                <CloseBtn handleClick={this.props.handleShowDetail} />
            </div>
        )
    }
}

export default MovieDetailBox