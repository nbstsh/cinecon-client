import React, { Component } from 'react'
import MovieDetail from './MovieDetail'


function DeleteButton() {
    return <button>DELETE</button>
}

function EditButton() {
    return <button>EDIT</button>
}

class MovieDetailBox extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <MovieDetail movieId={this.props.movieId} />
                <EditButton />
                <DeleteButton />
            </div>
        )
    }
}

export default MovieDetailBox