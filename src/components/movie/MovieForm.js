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
            {/* <h2>Movie Form</h2> */}
                <ErrorMessage message={this.state.errorMessage} />
                <form id='moiveForm' onSubmit={this.handleSubmit}>

                    <input 
                        type="text" 
                        name='title'
                        value={title} 
                        onChange={this.handleChange} 
                        placeholder='title' />

                    <label>director</label>
                    <input 
                        type="text" 
                        name='director' 
                        value={director} 
                        onChange={this.handleChange} />

                    <label>releaseYear</label>
                    <input 
                        type="number" 
                        name='releaseYear' 
                        value={releaseYear} 
                        onChange={this.handleChange} 
                        min='1900' />

                    <label>runningTime</label>
                    <input 
                        type="number" 
                        name='runningTime' 
                        value={runningTime} 
                        onChange={this.handleChange}
                        min='1' />
                    
                    <label>starring</label>
                    <input 
                        type="text" 
                        name='starring'
                        value={starring} 
                        onChange={this.handleChange} />

                    <label>country</label>
                    <input 
                        type="text" 
                        name='country'
                        value={country} 
                        onChange={this.handleChange} />
                    
                    <SelectGenres 
                        movieId={this.props.id} />

                    <MovieFormBtns
                        handleCancelClick={this.props.handleCancelClick} />
                </form>
            </div>
        )
    }
}


export default MovieForm
