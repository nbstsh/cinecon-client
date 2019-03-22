import React, { Component } from 'react'
import MovieItem from './MovieItem'
import MovieDetailContainer from './MovieDetailContainer'
import './MovieItemContainer.css'
import MovieTheater from '../movie-theater/MovieTheater'
import MovieForm from './MovieForm'

class MovieItemContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            needsDetail: false,
        }
    }
    showDetail = () => {
        this.setState({ needsDetail: true })
    }
    hideDetail = () => {
        this.setState({ needsDetail: false })
    }
    render() {
        return(
            <div className={`MovieItemContainer ${this.state.needsDetail ? 'has-detail-container' : '' }`}>

                {this.state.needsDetail ? (
                    <MovieTheater content={
                        <MovieDetailContainer 
                            id={this.props.id} 
                            handleClickCloseBtn={this.hideDetail}/>
                    }/>
                ) : ( 
                    <MovieItem 
                        id={this.props.id}
                        handleClick={this.showDetail}/>
                )}

                <MovieForm id={this.props.id}/>
            </div>
        )
    }
}

export default MovieItemContainer