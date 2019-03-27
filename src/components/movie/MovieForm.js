import React, { Component } from 'react'
import ErrorMessage from '../common/ErrorMessage'
import MovieFormBtns from './MovieFormBtns'
import movieManager from '../../modules/movie-manager'
import MovieFormToggleBtns from './MovieFormToggleBtns'
import MovieFormInputs from './MovieFormInputs'
import EditThumnail from './EditThumnail'
import SendingMessage from '../common/SendingMessage'
import './MovieForm.css'



class MovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {
                title: '', 
                director: '', 
                releaseYear: '', 
                genres: [], // [{genre object}] (genres in formData needs to be an array of genre's id)
                runningTime: '', 
                starring: '', 
                country: '',
                thumnail: '' 
            },
            imageBlob: null,
            needShowEditThumnail: false,
            isSending: false
        }
    } 
    componentDidMount() {
        if (!this.props.id) return 
        movieManager.getMovie(this.props.id).then(this.initMovie)
    }
    initMovie = ({ title, director, releaseYear, genres, runningTime, starring, country, thumnail }) => {
        this.setState(state => {
            state.movie = { title, director, releaseYear, genres, runningTime, starring, country, thumnail }
            return state
        })
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        this.setState({ isSending: true })

        const data = { ...this.state.movie } // to maintain genres as an array of objects
        data.genres = data.genres.map(g => g._id) // extract id of selected genres

        try {
            if (this.state.imageBlob) {
                const url = await movieManager.postThumnail(this.state.imageBlob)
                data.thumnail = url
            }

            if (this.props.id) {
                await movieManager.putAndSetMovie(this.props.id, data)
            } else {
                await movieManager.postAndSetMovie(data)
            }

            this.props.handleAfterSubmit()
        }
        catch(err) {
            this.setState({ errorMessage: err.message })
            console.log({err})
        }

        this.setState({ isSending: false })
    }
    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        
        if (name === 'genres') return this.handleGenresChange(e)
        this.setState((state) => state.movie[name] = value)
    }
    handleGenresChange = (e) => {
        e.target.checked ? 
            this.pushGenre(JSON.parse(e.target.dataset.genre)) : this.removeGenre(e.target.value)
    }
    pushGenre = (genre) => {
        this.setState(({ movie }) => movie.genres.push(genre))
    }
    removeGenre = (id) => {
        this.setState(({ movie }) => {
            const index = movie.genres.findIndex(g => g._id === id)
            return movie.genres.splice(index, 1)
        })
    }
    showEditThumnail = () => {
        this.setState({ needShowEditThumnail: true })
    }
    hideEditThumnail = () => {
        this.setState({ needShowEditThumnail: false })
    }
    setImageBlob = (imageBlob) => {
        this.setState({ imageBlob })
    }
    render() {
        return(
            <div className='MovieForm' data-need-thumnail={this.state.needShowEditThumnail}>
                {!this.state.isSending && 
                    <ErrorMessage message={this.state.errorMessage} />
                }

                {this.state.isSending && 
                    <SendingMessage />
                }

                {!this.state.isSending && 
                    <MovieFormToggleBtns 
                        handleDetailBtnClick={this.hideEditThumnail}
                        handleImageBtnClick={this.showEditThumnail}/>
                }
                
                {!this.state.isSending && 
                    <form id='moiveForm' onSubmit={this.handleSubmit}>

                        {this.state.needShowEditThumnail ? (
                            <EditThumnail 
                                thumnail={this.state.movie.thumnail}
                                setImageBlob={this.setImageBlob}
                                imageBlob={this.state.imageBlob}/>
                        ) : (
                            <MovieFormInputs 
                                id={this.props.id}
                                movie={this.state.movie}
                                handleChange={this.handleChange}/>
                        )}

                        <MovieFormBtns
                            handleCancelClick={this.props.handleCancelClick} />
                    </form>
                }
            </div>
        )
    }
}


export default MovieForm
