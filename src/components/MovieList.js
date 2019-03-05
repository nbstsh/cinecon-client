import React, { Component } from 'react'
import MovieItem from './MovieItem'
import MovieDetailBox from './MovieDetailBox'
import MovieFormModal from './MovieFormModal'
import SearchField from './SearchField'
import config from '../config/index'
import './MovieList.css'
const { api } = config

class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            filter: { // always lowercase
                title: '',
                director: '', 
                releaseYear: '', // '' or number
                genre: '',
                runningTime: '', 
                starring: '', 
                country: ''
            },
            showingMovieId: null
        }
    }
    componentDidMount() {
        fetch(api.movies)
            .then(response => response.json())
            .then(movies => this.setState({ movies }))
    }
    handleShowDetail = (event) => {
        this.setState({ showingMovieId: event.target.dataset.id})
    }
    handleShowForm = (event) => {
        //TODO: show form
    }
    removeMovie = (_id) => {
        const index = this.state.movies.findIndex(m => m._id === _id)
        this.state.movies.splice(index, 1)
    }
    updateMovie = (update) => {
        this.setState(({movies}) => {
            let index = movies.findIndex(m => m._id === update._id)
            if (index > -1) movies[index] = update
        })
    }
    pushMovie = (movie) => {
        this.setState(({ movies }) => movies.push(movie))
    }
    filterMovies = () => {
        const { movies, filter } = this.state

        return movies.filter(m => {
            const judgeValue = (key) => {
                if (typeof m[key] === 'number') {
                    return m[key] === filter[key] || filter[key] === ''
                }
                if (typeof m[key] === 'string') {
                    return m[key].toLowerCase().includes(filter[key])
                }
                return false
            }

            const results = Object.keys(filter).map(judgeValue)
            if (results.every(r => r)) return true
            return false
        })
    }
    render() {
        const movies = this.filterMovies()
        return (
            <div className="MovieList">
                <SearchField />
                {movies.map(m => {
                    return this.state.showingMovieId === m._id ? (
                        <MovieDetailBox 
                            key={m._id}
                            movieId={this.state.showingMovieId} 
                            handleShowDetail={this.handleShowDetail}
                            removeMovie={this.removeMovie}
                            updateMovie={this.updateMovie}
                        />
                    ) : (
                        <MovieItem
                            key={m._id}
                            _id={m._id}
                            title={m.title} 
                            genre={m.genre} 
                            releaseYear={m.releaseYear}
                            handleShowDetail={this.handleShowDetail}
                        />
                    )
                })}
                <MovieFormModal pushMovie={this.pushMovie}/>
            </div>
        )
    }
}

export default MovieList 