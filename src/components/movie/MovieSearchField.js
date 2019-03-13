import React, { Component } from 'react'
import TextInput from '../common/TextInput'
import NumberInput from '../common/NumberInput'
import Select from '../common/Select'
import genreManager from '../../modules/genre-manager'
import { setFilter } from '../../modules/movie-filter'
import './MovieSearchField.css'

class MovieSearchField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            director: '', 
            releaseYear: { min: '', max: '' }, 
            genre: '',
            runningTime: { min: '', max: '' },
            starring: '', 
            country: '',
            genres: [],
        }
    } 
    componentDidMount() {
        genreManager.getGenres()
            .then(genres => this.setState({ genres }))
    }
    // TODO 
    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState((state) => state[key] = value)

        // this.props.updateFilter({ key, value })
        setFilter({ [key]: value })
    }
    // TODO 
    handleRangeChange = (e) => {
        const num = Number(e.target.value)
        const value  = num > 0 ? num : ''

        const [ filterKey, minMaxKey ] = e.target.name.split('.')
        this.setState((state) => state[filterKey][minMaxKey] = value)

        setFilter({ [filterKey]:  { [minMaxKey]: value} })
    }
    render() {
        const { title, director, releaseYear, genre, runningTime, starring, country, genres } = this.state
        const options = genreManager.generateGenreOptions(genres)
        options.splice(0, 0, { key: 0, value: '', text: 'none'})

        return (
            <div className="MovieSearchField">
                <TextInput 
                    name="title" 
                    value={title} 
                    onChange={this.handleChange} 
                    placeholder="title" />
                <TextInput 
                    name="director" 
                    value={director} 
                    onChange={this.handleChange} 
                    placeholder="director" />
                <NumberInput 
                    name="releaseYear.min" 
                    value={releaseYear.min} 
                    onChange={this.handleRangeChange} 
                    placeholder="releaseYear min" />
                <NumberInput 
                    name="releaseYear.max" 
                    value={releaseYear.max} 
                    onChange={this.handleRangeChange} 
                    placeholder="releaseYear max" />
                <Select 
                    name='genre'
                    value={genre}
                    options={options}
                    onChange={this.handleChange}
                    label='genre'/> 
                <NumberInput 
                    name="runningTime.min" 
                    value={runningTime.min} 
                    onChange={this.handleRangeChange} 
                    placeholder="runningTime min" />
                <NumberInput 
                    name="runningTime.max" 
                    value={runningTime.max} 
                    onChange={this.handleRangeChange} 
                    placeholder="runningTime max" />
                <TextInput 
                    name="starring" 
                    value={starring} 
                    onChange={this.handleChange} 
                    placeholder="starring" />
                <TextInput 
                    name="country" 
                    value={country} 
                    onChange={this.handleChange} 
                    placeholder="country" />
            </div>
        )
    }
}

export default MovieSearchField
