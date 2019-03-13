import React, { Component } from 'react'
import MovieItemContainer from './MovieItemContainer'
import manager from '../../modules/movie-manager'
import './MovieList.css'

class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ids: []
        }
    } 
    componentDidMount() {
        this.initIds()
        manager.on(manager.UPDATE_IDB_EVENT, this.initIds)
        manager.on(manager.UPDATE_FILTER_EVENT, this.initIds)
    }
    componentWillUnmount() {
        manager.off(manager.UPDATE_IDB_EVENT, this.initIds)
        manager.off(manager.UPDATE_FILTER_EVENT, this.initIds)
    }
    initIds = () => {
        manager.generateFilteredMovieIds()
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