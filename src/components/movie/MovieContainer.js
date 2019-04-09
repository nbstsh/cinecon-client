import React, { Component } from 'react'
import movieManager from '../../modules/movie-manager'
import MovieList from './MovieList'
import MovieFormModal from './MovieFormModal'
import MovieSearchFieldContainer from './MovieSearchFieldContainer'
import userManager from '../../modules/user-manager'
import './MovieContainer.css'

class MovieContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdmin: false
        }
    } 
    componentDidMount() {
        movieManager.fetchAndSetMovies()
        this.initIsAdmin()
        userManager.on(userManager.UPDATE_EVENT, this.initIsAdmin)
    }
    componentWillUnmount() {
        userManager.off(userManager.UPDATE_EVENT, this.initIsAdmin)
    }
    initIsAdmin = () => {
        this.setState({ isAdmin: userManager.isAdminUser() })
    }
    render() {
        return(
            <div className='MovieContainer'>
                <MovieList />

                {this.state.isAdmin &&
                    <MovieFormModal />
                }

                <MovieSearchFieldContainer />

            </div>
        )
    }
}

export default MovieContainer