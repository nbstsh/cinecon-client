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
    handleChange = ({ target }) => {
        target.checked ? 
            this.props.push(target.value) :
            this.props.remove(target.value)
    }
    render() {
        return (
            <div className='GenreCheckboxContainer'>
                {this.state.genres.map(({ _id, name, color }) => (
                    <GenreCheckbox 
                        key={_id} 
                        id={_id} 
                        name={name} 
                        color={color} 
                        handleChange={this.handleChange}/>
                ))}
            </div>
        )
    }
}


export default GenreCheckboxContainer