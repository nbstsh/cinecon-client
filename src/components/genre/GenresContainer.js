import React, { Component } from 'react'
import GenreList from './GenreList'
import GenreForm from './GenreForm'
import manager from '../../modules/genre-manager'
import './GenresContainer.css'


class GenresContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        // update indexedDB with up-to-date genres from api
        manager.fetchAndSetGenres()
    }
    render() {
        return (
            <div className='GenresContainer'>
                <GenreList />
                <GenreForm />
            </div>
        )
    }
}


export default GenresContainer