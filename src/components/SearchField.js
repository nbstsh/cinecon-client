import React, { Component } from 'react'
import './SearchField.css'

class SearchField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            director: '', 
            releaseYear: '', 
            genre: '',
            runningTime: '', 
            starring: '', 
            country: ''
        }
    }

    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState((state) => state[key] = value)

        this.props.updateFilter({ key, value })
    }

    handleNumberChange = (e) => {
        const key = e.target.name
        const num = Number(e.target.value)
        const value  = num > 0 ? num : ''

        this.setState((state) => state[key] = value)

        this.props.updateFilter({ key, value })
    }

    render() {
        const { title, director, releaseYear, genre, runningTime, starring, country } = this.state

        return (
            <div className="SearchField">
                <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="title"/>
                <label>title</label>

                <input type="text" name="director" value={director} onChange={this.handleChange} placeholder="director"/>
                <label>director</label>

                <input type="number" name="releaseYear" value={releaseYear} onChange={this.handleNumberChange} placeholder="releaseYear"/> 
                <label>releaseYear</label>

                <input type="text" name="genre" value={genre} onChange={this.handleChange} placeholder="genre"/> 
                <label>genre</label>

                <input type="number" name="runningTime" value={runningTime} onChange={this.handleNumberChange} placeholder="runningTime"/> 
                <label>runningTime</label>

                <input type="text" name="starring" value={starring} onChange={this.handleChange} placeholder="starring"/> 
                <label>starring</label>

                <input type="text" name="country" value={country} onChange={this.handleChange} placeholder="country"/> 
                <label>country</label>
            </div>
        )
    }
}


export default SearchField