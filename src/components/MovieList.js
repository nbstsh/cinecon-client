import React, { Component } from 'react'
import MovieItem from './MovieItem'
import MovieDetailBox from './MovieDetailBox'
import MovieFormModal from './MovieFormModal'
import SearchField from './SearchField'
import config from '../config/index'
import './MovieList.css'
import userManager from '../modules/user-manager'
const { api } = config

class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            filter: { // always lowercase
                title: '',
                director: '', 
                releaseYear: { min: '', max: '' },
                genre: '',
                runningTime: { min: '' , max: '' },
                starring: '', 
                country: ''
            },
            showingMovieId: null,
            isAdminUser: false
        }
    }
    componentDidMount() {
        // TODO: replace with movie module
        fetch(api.movies)
            .then(response => response.json())
            .then(movies => this.setState({ movies }))

        // render MovieFormModal if user is admin after having done fetching user info
        userManager.on('userUpdated', () => {
            this.setState({ isAdminUser: userManager.isAdminUser()})
        })
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

        return movies.filter(movie => {
            const judgeValue = (key) => {
                // check whether or not target value is between min and max
                if (['releaseYear', 'runningTime'].includes(key)){
                    return isBetweenMinMax(movie[key], filter[key].min, filter[key].max)
                }
                // check whether or not target value contains filtering value
                if (typeof movie[key] === 'string') {
                    return movie[key].toLowerCase().includes(filter[key])
                }
                return false
            }

            const results = Object.keys(filter).map(judgeValue)
            if (results.every(r => r)) return true
            return false
        })
    }
    updateFilter = ({ key, value }) => {
        if (typeof value === 'string') {
            value = value.toLowerCase()
        }

        this.setState(({ filter }) => {
            const res = key.split('.').reduce((a, c, index, array) => {
                return (index === array.length - 1)
                    ? { targetProp: a, targetKey: c } : a[c]
            }, filter)

            return res.targetProp[res.targetKey] = value
        })
    }
    render() {
        const movies = this.filterMovies()
        return (
            <div className="MovieList">
                <SearchField updateFilter={this.updateFilter}/>
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
                {this.state.isAdminUser && <MovieFormModal pushMovie={this.pushMovie}/>}
            </div>
        )
    }
}


// helper function for filtering movie
function isBetweenMinMax(value, min, max) {
    if (!min && !max) return true
    if (!min) return value <= max
    if (!max) return value >= min
    return value <= max && value >= min
}

export default MovieList 