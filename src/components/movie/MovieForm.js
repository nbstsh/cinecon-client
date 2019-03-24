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

import { uploadFile } from '../../modules/storage'


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
            imageBlob: null,
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
        // const data = this.state.movie 
        //TODO: take care of genre
        // data.genres = Array.from(event.target.genres)
        //     .filter(input => input.checked)
        //     .map(input => input.value)

        // const requestPromise = this.props.id ? 
        //     movieManager.putAndSetMovie(this.props.id, data) : 
        //     movieManager.postAndSetMovie(data)
        
        if (this.state.imageBlob) {
            console.log('send image')

            movieManager.postThumnail(this.state.imageBlob)
                .then(url => console.log(url))
                .catch(err => console.log(err)) //TODO: error handling
        }

        // requestPromise
        //     .then(() => this.props.handleAfterSubmit())
        //     .catch(err => this.setState({ errorMessage: err.message }))        

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
    setImageBlob = (imageBlob) => {
        this.setState({ imageBlob })
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
                        <EditThumnail 
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
            </div>
        )
    }
}


export default MovieForm
