import React, { Component } from 'react'
import TextInput from '../common/TextInput'
import NumberInput from '../common/NumberInput'
import ErrorMessage from '../common/ErrorMessage'
import MovieFormBtns from './MovieFormBtns'
import movieManager from '../../modules/movie-manager'
import SelectGenres from './SelectGenres'
import MovieFormToggleBtns from './MovieFormToggleBtns'
import MovieFormInputs from './MovieFormInputs'
import EditThumnail from './EditThumnail'
import './MovieForm.css'


class MovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {
                title: '', 
                director: '', 
                releaseYear: '', 
                genres: '', 
                runningTime: '', 
                starring: '', 
                country: '' 
            },
            needShowEditThumnail: false
        }
    } 
    componentDidMount() {
        if (!this.props.id) return 
        movieManager.getMovie(this.props.id).then(this.initMovie)
    }
    initMovie = ({ title, director, releaseYear, genres, runningTime, starring, country }) => {
        this.setState(state => {
            return state.movie = { title, director, releaseYear, genres, runningTime, starring, country }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        // set selected genre ids
        const data = this.state.movie 
        data.genres = Array.from(event.target.genres)
            .filter(input => input.checked)
            .map(input => input.value)

        const requestPromise = this.props.id ? 
            movieManager.putAndSetMovie(this.props.id, data) : 
            movieManager.postAndSetMovie(data)
            
        requestPromise
            .then(() => this.props.handleAfterSubmit())
            .catch(err => this.setState({ errorMessage: err.message }))        

    }
    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState((state) => state.movie[name] = value)
    }
    showEditThumnail = () => {
        this.setState({ needShowEditThumnail: true })
    }
    hideEditThumnail = () => {
        this.setState({ needShowEditThumnail: false })
    }
    render() {

        return(
            <div className='MovieForm' data-need-thumnail={this.state.needShowEditThumnail}>

                <ErrorMessage message={this.state.errorMessage} />

                <MovieFormToggleBtns 
                    handleDetailBtnClick={this.hideEditThumnail}
                    handleImageBtnClick={this.showEditThumnail}/>

                <form id='moiveForm' onSubmit={this.handleSubmit}>

                    {this.state.needShowEditThumnail ? (
                        <EditThumnail />
                    ) : (
                        <MovieFormInputs 
                            id={this.props.id}
                            movie={this.state.movie}
                            handleChange={this.handleChange}/>
                    )}


                    <MovieFormBtns
                        handleCancelClick={this.props.handleCancelClick} />
                </form>
            </div>
        )
    }
}


export default MovieForm
