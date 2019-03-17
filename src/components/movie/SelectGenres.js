import React, { Component } from 'react'
import './SelectGenres.css'
import GenresDisplay from './GenresDisplay'
import GenreCheckboxContainer from './GenreCheckboxContainer'
import movieManager from '../../modules/movie-manager'


class SelectGenres extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedGenres: [],
            needOpen: false
        }
    }
    componentDidMount() {
        if (!this.props.movieId) return 
        movieManager.getMovie(this.props.movieId)
            .then(movie => this.setState({ selectedGenres: movie.genres }))
    }
    pushGenre = (genre) => {
        this.setState(({ selectedGenres }) => selectedGenres.push(genre))
    }
    removeGenre = (genre) => {
        const index = this.state.selectedGenres.findIndex(g => g._id === genre._id)
        if (index < 0) return 
        this.setState(state => state.selectedGenres.splice(index, 1))
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
                    genres={this.state.selectedGenres}
                    placeholder='genre' />
                <GenreCheckboxContainer 
                    selectedGenres={this.state.selectedGenres}
                    pushGenre={this.pushGenre}
                    removeGenre={this.removeGenre} />
            </div>
        )
    }
}


export default SelectGenres