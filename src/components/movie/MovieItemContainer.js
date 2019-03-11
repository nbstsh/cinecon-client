import React, { Component } from 'react'
import MovieItem from './MovieItem'
import MovieDetailContainer from './MovieDetailContainer'

class MovieItemContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    } 
    render() {
        return(
            <div className='MovieItemContainer'>
                {this.props.id}
                <MovieItem id={this.props.id} />
                <MovieDetailContainer id={this.props.id} />
            </div>
        )
    }
}

export default MovieItemContainer