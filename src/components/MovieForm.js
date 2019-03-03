import React, { Component } from 'react'
import { postRequest } from '../utils/request'
import config from '../config/development'
const { api } = config

const ErrorMessage = ({ message }) => {
    return message ? <div>{message}</div> : null
}

class MovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage: ''
        }
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
       console.log(movie)
    }
    render() {
        return (
            <div>
                <ErrorMessage message={this.state.errorMessage} />
                <form id="moiveForm" onSubmit={this.submitEvent}>
                    <label>
                        title: 
                        <input type="text" name="title"/> 
                    </label>
                    <label>
                        director: 
                        <input type="text" name="director"/> 
                    </label>
                    <label>
                        releaseYear: 
                        <input type="number" name="releaseYear"/> 
                    </label>
                    <label>
                        genre: 
                        <input type="text" name="genre"/> 
                    </label>
                    <label>
                        runningTime: 
                        <input type="number" name="runningTime"/> 
                    </label>
                    <label>
                        starring:
                        <input type="text" name="starring"/> 
                    </label>
                    <label>
                        country:
                        <input type="text" name="country"/> 
                    </label>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default MovieForm 