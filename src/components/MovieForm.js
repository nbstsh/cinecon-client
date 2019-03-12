import React, { Component } from 'react'
import _ from 'lodash'
import { postRequest, putRequest } from '../modules/request'
import ErrorMessage from './ErrorMessage'
import config from '../config/index'
// import './MovieForm.css'
import TextInput from './common/TextInput'
import NumberInput from './common/NumberInput'
import Select from './common/Select'
import { fetchGenres, generateGenreOptions } from '../modules/genres'
const { api } = config

class MovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: { 
                title: '',
                director: '', 
                releaseYear: '', 
                genre: '',
                runningTime: '', 
                starring: '', 
                country: ''
            },
            genres: [],
            errorMessage: ''
        }
    } 

    componentDidMount() {

        fetchGenres()
            .then(genres => this.setState({ genres }) )
            // TODO error handling
            .catch(err => console.log(err))


        if (!this.props.movieId) return 

        // TODO create api module & error handling
        fetch(`${api.movies}/${this.props.movieId}`)
            .then(res => {
                if (res.ok) return res.json()
                throw new Error(res)
            })
            .then(movie => {
                this.setState(state => {
                    state.movie = movie
                    state.movie.genre = movie.genre._id
                    console.log({state})
                    return state
                })
            })
            .catch(err => console.log(err))
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        event.persist()
        let movie = this.state.movie

        const data = _.pick(movie,
            ['title', 'director', 'releaseYear', 'genre', 'runningTime', 'starring', 'country'])

        const res = movie._id ? 
            await putRequest(`${api.movies}/${movie._id}`, data, true) :
            await postRequest(api.movies, data, true)

        if (!res.ok) {
            const errorMessage = await res.text()
            this.setState({ errorMessage })
            return 
        }

        movie = await res.json()
        this.setState({ errorMessage: '' })
        this.setState(({ movie }) => {
            for(let key in movie)
                movie[key] = ''
        })

        this.props.handleAfterSubmit(movie)
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState((state) => state.movie[name] = value)
    }

    render() {
        const { title, director, releaseYear, genre, runningTime, starring, country } = this.state.movie
        const options = generateGenreOptions(this.state.genres)

        return (
            <div className='MovieForm'>
                <h2>Movie Form</h2>
                <ErrorMessage message={this.state.errorMessage} />
                <form id='moiveForm' onSubmit={this.handleSubmit}>

                    <TextInput 
                        name='title' 
                        value={title} 
                        onChange={this.handleChange} 
                        placeholder='title' 
                    />
                    <TextInput 
                        name='director' 
                        value={director} 
                        onChange={this.handleChange} 
                        placeholder='director' 
                    />

                    <NumberInput 
                        name='releaseYear' 
                        value={releaseYear} 
                        onChange={this.handleChange} 
                        placeholder='releaseYear' 
                    />

                    <Select 
                        name='genre'
                        value={genre}
                        options={options}
                        onChange={this.handleChange}
                        label='genre'
                    />

                    <NumberInput 
                        name='runningTime' 
                        value={runningTime} 
                        onChange={this.handleChange} 
                        placeholder='runningTime' 
                    />

                    <TextInput 
                        name='starring' 
                        value={starring} 
                        onChange={this.handleChange} 
                        placeholder='starring' 
                    />

                    <TextInput 
                        name='country' 
                        value={country} 
                        onChange={this.handleChange} 
                        placeholder='country' 
                    />

                    <div className='MovieForm-btn-box'>
                        <span onClick={this.props.handleCancelClick} className='cancel btn'>Cancel</span>
                        <input type='submit' className='submit btn' value='submit' />
                    </div>
                </form>
            </div>
        )
    }
}

export default MovieForm 