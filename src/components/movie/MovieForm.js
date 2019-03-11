import React, { Component } from 'react'
import TextInput from '../common/TextInput'
import NumberInput from '../common/NumberInput'
import Select from '../common/Select'
import ErrorMessage from '../ErrorMessage'
import MovieFormBtns from './MovieFormBtns'
import movieManager from '../../modules/movie-manager'
import { generateGenreOptions, fetchGenres } from '../../modules/genres'
import './MovieForm.css'


class MovieForm extends Component {
    constructor(props) {
        super(props)
        const { _id, title, director, releaseYear, genre, runningTime, starring, country } = props.movie
        const genreId = genre ? genre._id : null
        
        this.state = {
            id: _id,
            movie: { title, director, releaseYear, genre: genreId, runningTime, starring, country },
            genres: []
        }
    } 
    componentDidMount() {
        // TODO replace after refactoring genre module
        fetchGenres()
            .then(genres => this.setState({ genres }))
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { id, movie } = this.state

        const requestPromise = id ? 
            movieManager.putAndSetMovie(id, movie) : 
            movieManager.postAndSetMovie(movie)
            
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
        const { title, director, releaseYear, genre, runningTime, starring, country } = this.state.movie
        const options = generateGenreOptions(this.state.genres)

        return(
            <div className='MovieForm'>
            <h2>Movie Form</h2>
                <ErrorMessage message={this.state.errorMessage} />
                <form id='moiveForm' onSubmit={this.handleSubmit}>

                    <TextInput 
                        name='title' 
                        value={title} 
                        onChange={this.handleChange} 
                        placeholder='title' />
                    <TextInput 
                        name='director' 
                        value={director} 
                        onChange={this.handleChange} 
                        placeholder='director' />
                    <NumberInput 
                        name='releaseYear' 
                        value={releaseYear} 
                        onChange={this.handleChange} 
                        placeholder='releaseYear' />
                    <Select 
                        name='genre'
                        value={genre}
                        options={options}
                        onChange={this.handleChange}
                        label='genre'/>
                    <NumberInput 
                        name='runningTime' 
                        value={runningTime} 
                        onChange={this.handleChange} 
                        placeholder='runningTime' />
                    <TextInput 
                        name='starring' 
                        value={starring} 
                        onChange={this.handleChange} 
                        placeholder='starring' />

                    <TextInput 
                        name='country' 
                        value={country} 
                        onChange={this.handleChange} 
                        placeholder='country' />

                    <MovieFormBtns
                        handleCancelClick={this.props.handleCancelClick} />
                </form>
            </div>
        )
    }
}


export default MovieForm
