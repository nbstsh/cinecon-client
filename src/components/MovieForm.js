import React, { Component } from 'react'


class MovieForm extends Component {
    constructor(props) {
        super(props)
    }
    submitEvent = (event) => {
        event.preventDefault()


        const fd = new FormData(event.target)
        for(let p of fd) {
            console.log(p)
        }

    }
    render() {
        return (
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
        )
    }
}

export default MovieForm 