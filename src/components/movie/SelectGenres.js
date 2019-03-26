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
    // pushGenre = (genre) => {
    //     this.setState(({ selectedGenres }) => selectedGenres.push(genre))
    // }
    // removeGenre = (genre) => {
    //     const index = this.state.selectedGenres.findIndex(g => g._id === genre._id)
    //     if (index < 0) return 
    //     this.setState(state => state.selectedGenres.splice(index, 1))
    // }
    toggleNeedsOpen = () => {
        this.setState({ needOpen: !this.state.needOpen })
    }
    render() {
        const placeholderShown = this.state.selectedGenres.length < 1
        console.log(this.props.genres)
        return (
            <div className='SelectGenres' onClick={this.toggleNeedsOpen}
                data-placeholder-shown={placeholderShown} data-need-open={this.state.needOpen} >

                <GenresDisplay 
                    genres={this.props.genres}
                    placeholder='genre' />
                <GenreCheckboxContainer 
                    selectedGenres={this.props.genres}
                    // pushGenre={this.pushGenre}
                    // removeGenre={this.removeGenre}
                    handleChange={this.props.handleChange} />
            </div>
        )
    }
}


export default SelectGenres