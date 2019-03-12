import React, { Component } from 'react'
import GenreList from './GenreList'
import GenreForm from './GenreForm'


class GenresContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        // TODO replace handleResponse in GenreForm
        return (
            <div className='GenresContainer'>
                <GenreList />
                <GenreForm handleResponse={this.pushGenre} />
            </div>
        )
    }
}


export default GenresContainer