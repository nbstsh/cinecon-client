import React, { Component } from 'react'
import TextInput from '../common/TextInput'
import NumberInput from '../common/NumberInput'
import Select from '../common/Select'
import genreManager from '../../modules/genre-manager'
import movieManager from '../../modules/movie-manager'
import './MovieSearchField.css'

class MovieSearchField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            director: '', 
            releaseYear: { min: '', max: '' }, 
            genres: '',
            runningTime: { min: '', max: '' },
            starring: '', 
            country: '',
            savedGenres: [],
        }
    } 
    componentDidMount() {
        genreManager.getGenres()
            .then(savedGenres => this.setState({ savedGenres }))
    }
    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState((state) => state[key] = value)

        movieManager.updateFilter({ [key]: value })
    }
    handleRangeChange = (e) => {
        const num = Number(e.target.value)
        const value  = num > 0 ? num : ''

        const [ filterKey, minMaxKey ] = e.target.name.split('.')
        this.setState((state) => state[filterKey][minMaxKey] = value)

        movieManager.updateFilter({ [filterKey]:  { [minMaxKey]: value} })
    }
    render() {
        const { title, director, releaseYear, genres, runningTime, starring, country, savedGenres } = this.state
        const options = genreManager.generateGenreOptions(savedGenres)
        options.splice(0, 0, { key: 0, value: '', text: 'none'})

        return (
            <div className="MovieSearchField">
                <TextInput 
                    name="title" 
                    value={title} 
                    handleChange={this.handleChange} 
                    placeholder="title" />
                <TextInput 
                    name="director" 
                    value={director} 
                    handleChange={this.handleChange} 
                    placeholder="director" />
                <NumberInput 
                    name="releaseYear.min" 
                    value={releaseYear.min} 
                    handleChange={this.handleRangeChange} 
                    placeholder="releaseYear min" />
                <NumberInput 
                    name="releaseYear.max" 
                    value={releaseYear.max} 
                    handleChange={this.handleRangeChange} 
                    placeholder="releaseYear max" />
                <Select 
                    name='genres'
                    value={genres}
                    options={options}
                    handleChange={this.handleChange}
                    label='genre'/> 
                <NumberInput 
                    name="runningTime.min" 
                    value={runningTime.min} 
                    handleChange={this.handleRangeChange} 
                    placeholder="runningTime min" />
                <NumberInput 
                    name="runningTime.max" 
                    value={runningTime.max} 
                    handleChange={this.handleRangeChange} 
                    placeholder="runningTime max" />
                <TextInput 
                    name="starring" 
                    value={starring} 
                    handleChange={this.handleChange} 
                    placeholder="starring" />
                <TextInput 
                    name="country" 
                    value={country} 
                    handleChange={this.handleChange} 
                    placeholder="country" />
            </div>
        )
    }
}

export default MovieSearchField
