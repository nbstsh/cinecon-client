import React, { Component } from 'react'
import _ from 'lodash'
import { postRequest, putRequest } from '../modules/request'
import ErrorMessage from './ErrorMessage'
import config from '../config/index'
import './MovieForm.css'
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
        return (
            <div className="MovieForm">
                <h2>Movie Form</h2>
                <ErrorMessage message={this.state.errorMessage} />
                <form id="moiveForm" onSubmit={this.handleSubmit}>

                    <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="title"/>
                    <label>title</label>

                    <input type="text" name="director" value={director} onChange={this.handleChange} placeholder="director"/>
                    <label>director</label>

                    <input type="number" name="releaseYear" value={releaseYear} onChange={this.handleChange} placeholder="releaseYear"/> 
                    <label>releaseYear</label>

                    <input type="text" name="genre" value={genre} onChange={this.handleChange} placeholder="genre"/> 
                    <label>genre</label>

                    <input type="number" name="runningTime" value={runningTime} onChange={this.handleChange} placeholder="runningTime"/> 
                    <label>runningTime</label>

                    <input type="text" name="starring" value={starring} onChange={this.handleChange} placeholder="starring"/> 
                    <label>starring</label>

                    <input type="text" name="country" value={country} onChange={this.handleChange} placeholder="country"/> 
                    <label>country</label>

                    <div className="MovieForm-btn-box">
                        <span onClick={this.props.handleCancelClick} className="cancel btn">Cancel</span>
                        <input type="submit" className="submit btn" value="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default MovieForm 