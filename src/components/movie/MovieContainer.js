import React, { Component } from 'react'
import movieManager from '../../modules/movie-manager'
import MovieSearchField from './MovieSearchField'
import MovieList from './MovieList'
import MovieFormModal from './MovieFormModal'

class MovieContainer extends Component {
    constructor(props) {
        super(props)
    } 
    componentDidMount() {
        movieManager.fetchAndSetMovies()

        // movieManager.addListener(movieManager.UPDATE_IDB_EVENT, async () => {
        //     const movies = await movieManager.getMovies()
        //     this.setState({ movies })
        // })
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