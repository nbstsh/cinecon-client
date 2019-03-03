import React, { Component } from 'react'
import _ from 'lodash'
import { postRequest, putRequest } from '../utils/request'
import ErrorMessage from './ErrorMessage'
import config from '../config/development'
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
            errorMessage: ''
        }
    } 

    componentDidMount() {
        if (!this.props.movieId) return 

        // TODO create api module & error handling
        fetch(`${api.movies}/${this.props.movieId}`)
            .then(res => {
                if (res.ok) return res.json()
                throw new Error(res)
            })
            .then(movie => this.setState({ movie }))
            .catch(err => console.log(err))
    }

    handleSubmit = async (event) => {
        event.preventDefault()
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
        this.setState({ movie })

        this.props.handleAfterSubmit()
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState((state) => state.movie[name] = value)
    }

    render() {
        const { title, director, releaseYear, genre, runningTime, starring, country } = this.state.movie
        return (
            <div>
                <ErrorMessage message={this.state.errorMessage} />
                <form id="moiveForm" onSubmit={this.handleSubmit}>
                    <label>
                        title: 
                        <input type="text" name="title" value={title} onChange={this.handleChange}/> 
                    </label>
                    <label>
                        director: 
                        <input type="text" name="director" value={director} onChange={this.handleChange}/> 
                    </label>
                    <label>
                        releaseYear: 
                        <input type="number" name="releaseYear" value={releaseYear} onChange={this.handleChange}/> 
                    </label>
                    <label>
                        genre: 
                        <input type="text" name="genre" value={genre} onChange={this.handleChange}/> 
                    </label>
                    <label>
                        runningTime: 
                        <input type="number" name="runningTime" value={runningTime} onChange={this.handleChange}/> 
                    </label>
                    <label>
                        starring:
                        <input type="text" name="starring" value={starring} onChange={this.handleChange}/> 
                    </label>
                    <label>
                        country:
                        <input type="text" name="country" value={country} onChange={this.handleChange}/> 
                    </label>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default MovieForm 