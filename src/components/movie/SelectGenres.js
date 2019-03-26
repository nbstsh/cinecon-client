import React, { Component } from 'react'
import './SelectGenres.css'
import GenresDisplay from './GenresDisplay'
import GenreCheckboxContainer from './GenreCheckboxContainer'
import movieManager from '../../modules/movie-manager'
import genreManager from '../../modules/genre-manager'


class SelectGenres extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedGenres: [],
            needOpen: false
        }
    }
    toggleNeedsOpen = () => {
        this.setState({ needOpen: !this.state.needOpen })
    }
    render() {
        const placeholderShown = this.state.selectedGenres.length < 1
        return (
            <div className='SelectGenres' onClick={this.toggleNeedsOpen}
                data-placeholder-shown={placeholderShown} data-need-open={this.state.needOpen} >

                <GenresDisplay 
                    genres={this.props.genres}
                    placeholder='genre' />
                <GenreCheckboxContainer 
                    selectedGenres={this.props.genres}
                    handleChange={this.props.handleChange} />
            </div>
        )
    }
}


export default SelectGenres