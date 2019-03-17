import React, { Component } from 'react'
import movieManager from '../../modules/movie-manager'
import MovieSearchField from './MovieSearchField'
import MovieList from './MovieList'
import MovieFormModal from './MovieFormModal'
import MovieSearchFieldContainer from './MovieSearchFieldContainer'
import userManager from '../../modules/user-manager'
import './MovieContainer.css'

class MovieContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdmin: false,
            isModalClosed: true
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
    toggleModalState = () => {
        this.setState({ isModalClosed: !this.state.isModalClosed })
    }
    render() {
        return(
            <div className='MovieContainer'>
                <MovieList />

                {this.state.isAdmin &&
                    <MovieFormModal handleClick={this.toggleModalState}/>
                }

                {this.state.isModalClosed && 
                    <MovieSearchFieldContainer />
                }

            </div>
        )
    }
}

export default MovieContainer