import React, { Component } from 'react'
import { postRequest } from '../utils/request'
import ErrorMessage from './ErrorMessage'
import config from '../config/development'
const { api } = config

class MovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: null,
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
    submitEvent = async (event) => {
        event.preventDefault()

        const data = {}
        for(let p of new FormData(event.target)) {
            data[p[0]] = p[1]
        }
        
        const res = await postRequest(api.movies, data, true)
        if (!res.ok) {
            const errorMessage = await res.text()
            this.setState({ errorMessage })
            return 
        }

        this.setState({ errorMessage: '' })

       const movie = await res.json()
       this.setState({ movie })
    }
    render() {
        const {_id, title, director, releaseYear, genre, runningTime, starring, country} = this.state.movie || {}
        return (
            <div>
                <ErrorMessage message={this.state.errorMessage} />
                <form id="moiveForm" onSubmit={this.submitEvent}>
                    <label>
                        title: 
                        <input type="text" name="title" value={title}/> 
                    </label>
                    <label>
                        director: 
                        <input type="text" name="director" value={director}/> 
                    </label>
                    <label>
                        releaseYear: 
                        <input type="number" name="releaseYear" value={releaseYear}/> 
                    </label>
                    <label>
                        genre: 
                        <input type="text" name="genre" value={genre}/> 
                    </label>
                    <label>
                        runningTime: 
                        <input type="number" name="runningTime" value={runningTime}/> 
                    </label>
                    <label>
                        starring:
                        <input type="text" name="starring" value={starring}/> 
                    </label>
                    <label>
                        country:
                        <input type="text" name="country" value={country}/> 
                    </label>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default MovieForm 