import React, { Component } from 'react'
import './SelectGenres.css'
import GenresDisplay from './GenresDisplay'
import GenreCheckboxContainer from './GenreCheckboxContainer'
import genreManager from '../../modules/genre-manager';


class SelectGenres extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedGenreIds: [],
            selectedGenres: []
        }
    }
    pushId = (id) => {
        this.setState(({ selectedGenreIds }) => selectedGenreIds.push(id))
    }
    removeId = (id) => {
        const { selectedGenreIds } = this.state
        const index = selectedGenreIds.findIndex(i => i === id)
        if (index < 0) return 
        selectedGenreIds.splice(index, 1)
        
        this.setState({ selectedGenreIds: selectedGenreIds })
    }
    pushGenre = (genre) => {
        this.setState(({ selectedGenres }) => selectedGenres.push(genre))
    }
    removeGenre = (index) => {
        this.setState(state => state.selectedGenres.splice(index, 1))
    }
    push = (id) => {
        this.pushId(id)
        genreManager.getGenre(id)
            .then(genre => this.pushGenre(genre))
    }
    remove = (id) => {
        this.removeId(id)
        const index = this.state.selectedGenres.findIndex(g => g._id === id)
        if (index < 0) return 
        this.removeGenre(index)
    }
    render() {
        return (
            <div className='SelectGenres'>
                <GenresDisplay genres={this.state.selectedGenres} />
                <GenreCheckboxContainer 
                    push={this.push}
                    remove={this.remove} />
            </div>
        )
    }
}


export default SelectGenres