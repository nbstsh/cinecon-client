import React, { Component } from 'react'
import TextInput from '../common/TextInput'
import NumberInput from '../common/NumberInput'
import ErrorMessage from '../common/ErrorMessage'
import MovieFormBtns from './MovieFormBtns'
import movieManager from '../../modules/movie-manager'
import SelectGenres from './SelectGenres'
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
            }
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
    render() {
        const { title, director, releaseYear, runningTime, starring, country } = this.state.movie

        return(
            <div className='MovieForm'>
            <h2>Movie Form</h2>
                <ErrorMessage message={this.state.errorMessage} />
                <form id='moiveForm' onSubmit={this.handleSubmit}>

                    <TextInput 
                        name='title' 
                        value={title} 
                        handleChange={this.handleChange} 
                        placeholder='title' />
                    <TextInput 
                        name='director' 
                        value={director} 
                        handleChange={this.handleChange} 
                        placeholder='director' />
                    <NumberInput 
                        name='releaseYear' 
                        value={releaseYear} 
                        handleChange={this.handleChange} 
                        placeholder='releaseYear' />
                    <SelectGenres 
                        movieId={this.props.id} />
                    <NumberInput 
                        name='runningTime' 
                        value={runningTime} 
                        handleChange={this.handleChange} 
                        placeholder='runningTime' />
                    <TextInput 
                        name='starring' 
                        value={starring} 
                        handleChange={this.handleChange} 
                        placeholder='starring' />
                    <TextInput 
                        name='country' 
                        value={country} 
                        handleChange={this.handleChange} 
                        placeholder='country' />
                    <MovieFormBtns
                        handleCancelClick={this.props.handleCancelClick} />
                </form>
            </div>
        )
    }
}


export default MovieForm
