import React, { Component } from 'react'
import MovieItem from './MovieItem'
import MovieDetailContainer from './MovieDetailContainer'
import './MovieItemContainer.css'

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
                    <MovieDetailContainer 
                        id={this.props.id} 
                        handleClickCloseBtn={this.hideDetail}/>
                ) : ( 
                    <MovieItem 
                        id={this.props.id}
                        handleClickShowDetail={this.showDetail}/>
                )}
            </div>
        )
    }
}

export default MovieItemContainer