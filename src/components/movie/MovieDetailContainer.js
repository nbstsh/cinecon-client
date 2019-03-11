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
            movie: {},
            isAdminUser: false,
            needsForm: false 
        }
    } 
    async componentDidMount() {
        const movie = await movieManager.getMovie(this.props.id)
        this.setState({ movie })
        
        this.setState({ isAdminUser: userManager.isAdminUser() })
        userManager.on(userManager.UPDATE_EVENT, () => {
            this.setState({ isAdminUser: userManager.isAdminUser() })
        })
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
        const { needsForm, isAdminUser } = this.state

        return(
            <div className='MovieDetailContainer'>
                {!needsForm &&
                    <MovieDetail movie={this.state.movie}/>
                }
                
                {!needsForm && isAdminUser && 
                    <MovieDetailBtns 
                        handleClcikEdit={this.showMovieForm} 
                        handleClickDelete={this.deleteMovie} />
                }

                {this.state.needsForm &&
                    <MovieForm 
                        movie={this.state.movie}
                        handleCancelClick={this.hideMovieForm} />
                }

                <CloseBtn handleClick={this.props.handleShowDetail} />
            </div>
        )
    }
}


export default MovieDetailContainer