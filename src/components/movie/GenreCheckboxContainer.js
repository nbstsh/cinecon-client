import React, { Component } from 'react'
import './GenreCheckboxContainer.css'
import '../genre/GenreBadge'
import GenreCheckbox from './GenreCheckbox'
import genreManager from '../../modules/genre-manager'


class GenreCheckboxContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genres: []
        }
    }
    componentDidMount() {
        genreManager.getGenres()
            .then(genres => this.setState({ genres }))
    }
    handleChange = (event) => {
        this.props.handleChange(event)
        // const genre = JSON.parse(event.target.dataset.genre)
        // event.target.checked ? 
        //     this.props.pushGenre(genre) :
        //     this.props.removeGenre(genre)
    }
    render() {
        return (
            <div className='GenreCheckboxContainer' onClick={(e) => { e.stopPropagation() }}>
                {this.state.genres.map((genre) => (
                    <GenreCheckbox 
                        key={genre._id} 
                        genre={genre}
                        isSelected={this.props.selectedGenres.some(g => g._id === genre._id)}
                        handleChange={this.handleChange}/>
                ))}
            </div>
        )
    }
}


export default GenreCheckboxContainer