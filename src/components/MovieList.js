import React, { Component } from 'react'
import MovieItem from './MovieItem'
import MovieDetailBox from './MovieDetailBox'
import config from '../config/index'
import './MovieList.css'
const { api } = config

class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            showingMovieId: null
        }
    }
    componentDidMount() {
        fetch(api.movies)
            .then(response => response.json())
            .then(movies => this.setState({ movies }))
    }
    handleShowDetail = (event) => {
        this.setState({ showingMovieId: event.target.dataset.id})
    }
    handleShowForm = (event) => {
        //TODO: show form
    }
    removeMovie = (_id) => {
        const index = this.state.movies.findIndex(m => m._id === _id)
        this.state.movies.splice(index, 1)
    }
    updateMovie = (update) => {
        let movie = this.state.movies.find(m => m._id === update._id)
        if (!movie) return

        movie = update
    }
    render() {
        return (
            <div className="MovieList">
                {this.state.movies.map(m => {
                    return this.state.showingMovieId === m._id ? (
                        <MovieDetailBox 
                            key={m._id}
                            movieId={this.state.showingMovieId} 
                            handleShowDetail={this.handleShowDetail}
                            removeMovie={this.removeMovie}
                            updateMovie={this.updateMovie}
                        />
                    ) : (
                        <MovieItem
                            key={m._id}
                            _id={m._id}
                            title={m.title} 
                            genre={m.genre} 
                            releaseYear={m.releaseYear}
                            handleShowDetail={this.handleShowDetail}
                        />
                    )
                })}
            </div>
        )
    }
}

export default MovieList 