import React, { Component } from 'react'
import MovieDetail from './MovieDetail'
import { deleteRequest } from '../utils/request'
import config from '../config/index'
const { api } = config

function DeleteButton(props) {
    console.log(props)
    return <button onClick={props.deleteMovie}>DELETE</button>
}

function EditButton() {
    return <button>EDIT</button>
}

class MovieDetailBox extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    deleteMovie = async () => {
        console.log('clicked')
        const res = await deleteRequest(`${api.movies}/${this.props.movieId}`, true)
        console.log('is Deleted?', res.ok)
    }
    render() {
        return (
            <div>
                <MovieDetail movieId={this.props.movieId} />
                <EditButton />
                <DeleteButton deleteMovie={this.deleteMovie} />
            </div>
        )
    }
}

export default MovieDetailBox