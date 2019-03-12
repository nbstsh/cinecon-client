import React, { Component } from 'react'
import MovieDetail from './MovieDetail'
import MovieForm from './MovieForm'
import CloseBtn from '../common/CloseBtn'
import MovieDetailBtns from './MovieDetailBtns'
import movieManager from '../../modules/movie-manager'
import userManager from '../../modules/user-manager'
import './MovieDetailContainer.css'


class MovieDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdmin: false,
            needsForm: false 
        }
    } 
    componentDidMount() {
        this.initIsAdmin()
        userManager.on(userManager.UPDATE_EVENT, this.initIsAdmin)
    }
    componentWillUnmount() {
        userManager.off(userManager.UPDATE_EVENT, this.initIsAdmin)
    }
    initIsAdmin = () => {
        this.setState({ isAdmin: userManager.isAdminUser() })
    }
    showMovieForm = () => {
        this.setState({ needsForm: true })
    }
    hideMovieForm = () => {
        this.setState({ needsForm: false })
    }
    //TODO add confirmation modal
    deleteMovie = () => {
        movieManager.deleteMovie(this.state.movie._id)
    }
    render() {
        const { needsForm, isAdmin } = this.state

        return(
            <div className='MovieDetailContainer'>
                {!needsForm &&
                    <MovieDetail id={this.props.id} />
                }
                
                {!needsForm && isAdmin && 
                    <MovieDetailBtns 
                        handleClcikEdit={this.showMovieForm} 
                        handleClickDelete={this.deleteMovie} />
                }

                {this.state.needsForm &&
                    <MovieForm 
                        id={this.props.id}
                        handleAfterSubmit={this.hideMovieForm}
                        handleCancelClick={this.hideMovieForm} />
                }

                <CloseBtn handleClick={this.props.handleClickCloseBtn} />
            </div>
        )
    }
}


export default MovieDetailContainer