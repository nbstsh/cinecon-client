import React, { Component } from 'react'
import TextInput from '../common/TextInput'
import NumberInput from '../common/NumberInput'
import Select from '../common/Select'
import ErrorMessage from '../common/ErrorMessage'
import MovieFormBtns from './MovieFormBtns'
import movieManager from '../../modules/movie-manager'
import genreManager from '../../modules/genre-manager'
import SelectGenres from './SelectGenres'
import './MovieForm.css'


class MovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {},
            genres: []
        }
    } 
    componentDidMount() {
        genreManager.fetchGenres()
            .then(genres => this.setState({ genres }))

        if (!this.props.id) return 
        movieManager.getMovie(this.props.id)
            .then(this.initMovie)
    }
    initMovie = ({ title, director, releaseYear, genre, runningTime, starring, country }) => {
        this.setState(state => {
            return state.movie = { 
                title, 
                director, 
                releaseYear, 
                genre: [], 
                runningTime, 
                starring, country 
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const selectedGenreIds = Array.from(event.target.genres)
            .filter(input => input.checked)
            .map(input => input.value)
        console.log({ selectedGenreIds }) 
        

        // const requestPromise = this.props.id ? 
        //     movieManager.putAndSetMovie(this.props.id, this.state.movie) : 
        //     movieManager.postAndSetMovie(this.state.movie)
            
        // requestPromise
        //     .then(() => this.props.handleAfterSubmit())
        //     .catch(err => this.setState({ errorMessage: err.message }))        

    }
    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState((state) => state.movie[name] = value)
    }
    render() {
        const { title, director, releaseYear, genre, runningTime, starring, country } = this.state.movie
        const options = genreManager.generateGenreOptions(this.state.genres)
        options.splice(0, 0, { key: '', value: '', text: 'none'})

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
                    {/* <Select 
                        name='genre'
                        value={genre}
                        options={options}
                        onChange={this.handleChange}
                        label='genre'/> */}
                    <SelectGenres />
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
