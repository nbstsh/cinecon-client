import React, { Component } from 'react'
import Movie from './Movie'

const MOVIES_API_URL = 'https://cinecon.herokuapp.com/api/movies'
// const MOVIES_API_URL = 'http://localhost:3001/api/movies'


class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        fetch(MOVIES_API_URL)
            .then(response => response.json())
            .then(movies => this.setState({ movies }))
    }
    generateMovie = () => {
        return this.state.movies.map(m => <Movie
            key={m._id} 
            _id={m._id}
            title={m.title}
            director={m.director}
            releaseYear={m.releaseYear}
            genre={m.genre}
            runningTime={m.runningTime}
            starring={m.starring}
            country={m.country}
        />)
    }
    generateEmptyMessage() {
        return <div>No videos provided</div>
    }
    render() {
        return this.state.movies.length > 0 ?
            this.generateMovie() : this.generateEmptyMessage()
    }
}

export default MovieList 