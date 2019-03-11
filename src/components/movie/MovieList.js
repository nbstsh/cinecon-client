import React, { Component } from 'react'
import MovieItemContainer from './MovieItemContainer'
import movieManager from '../../modules/movie-manager'

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
        const list = this.state.ids.map(id => (
            <MovieItemContainer key={id} id={id} />
        ))

        return(
            <div className='MovieList'>
                {list}
            </div>
        )
    }
}

export default MovieList