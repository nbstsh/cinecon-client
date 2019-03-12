import React, { Component } from 'react'
import MovieItemContainer from './MovieItemContainer'
import movieManager from '../../modules/movie-manager'
import './MovieList.css'

class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ids: []
        }
    } 
    componentDidMount() {
        movieManager.getIds()
            .then(ids => this.setState({ ids }))
    }
    render() {
        return(
            <div className='MovieList'>
                {this.state.ids.map(id => (
                    <MovieItemContainer key={id} id={id} />
                ))}
            </div>
        )
    }
}

export default MovieList