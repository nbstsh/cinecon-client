import React, { Component } from 'react'
import movieManager from '../../modules/movie-manager'
import MovieSearchField from './MovieSearchField'
import MovieList from './MovieList'
import MovieFormModal from './MovieFormModal'
import './MovieContainer.css'

class MovieContainer extends Component {
    constructor(props) {
        super(props)
    } 
    componentDidMount() {
        movieManager.fetchAndSetMovies()
    }
    render() {
        return(
            <div className='MovieContainer'>
                <MovieSearchField />
                <MovieList />
                <MovieFormModal />
            </div>
        )
    }
}

export default MovieContainer