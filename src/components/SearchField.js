import React, { Component } from 'react'
import './SearchField.css'
import TextInput from './common/TextInput'
import NumberInput from './common/NumberInput'


class SearchField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            director: '', 
            // releaseYear: '', 
            releaseYear: {
                min: '',
                max: ''
            }, 
            genre: '',
            // runningTime: '', 
            runningTime: {
                min: '',
                max: ''
            },
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

    handleRangeChange = (e) => {
        const key = e.target.name
        const num = Number(e.target.value)
        const value  = num > 0 ? num : ''

        const keys = key.split('.')
        this.setState((state) => state[keys[0]][keys[1]] = value)

        this.props.updateFilter({ key, value })
    }

    render() {
        const { title, director, releaseYear, genre, runningTime, starring, country } = this.state

        return (
            <div className="SearchField">
                
                <TextInput 
                    name="title" 
                    value={title} 
                    onChange={this.handleChange} 
                    placeholder="title" 
                />
                <TextInput 
                    name="director" 
                    value={director} 
                    onChange={this.handleChange} 
                    placeholder="director" 
                />

                <NumberInput 
                    name="releaseYear.min" 
                    value={releaseYear.min} 
                    onChange={this.handleRangeChange} 
                    placeholder="releaseYear min" 
                />

                <NumberInput 
                    name="releaseYear.max" 
                    value={releaseYear.max} 
                    onChange={this.handleRangeChange} 
                    placeholder="releaseYear max" 
                />

                <TextInput 
                    name="genre" 
                    value={genre} 
                    onChange={this.handleChange} 
                    placeholder="genre" 
                />

                <NumberInput 
                    name="runningTime.min" 
                    value={runningTime.min} 
                    onChange={this.handleRangeChange} 
                    placeholder="runningTime min" 
                />

                <NumberInput 
                    name="runningTime.max" 
                    value={runningTime.max} 
                    onChange={this.handleRangeChange} 
                    placeholder="runningTime max" 
                />

                <TextInput 
                    name="starring" 
                    value={starring} 
                    onChange={this.handleChange} 
                    placeholder="starring" 
                />

                <TextInput 
                    name="country" 
                    value={country} 
                    onChange={this.handleChange} 
                    placeholder="country" 
                />
            </div>
        )
    }
}


export default SearchField