import React, { Component } from 'react'
import MovieItem from './MovieItem'
import MovieDetailContainer from './MovieDetailContainer'

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
            <div className='MovieItemContainer'>

                {!this.state.needsDetail && 
                    <MovieItem 
                        id={this.props.id}
                        handleClickShowDetail={this.showDetail}/>
                }

                {this.state.needsDetail &&
                    <MovieDetailContainer 
                        id={this.props.id} 
                        handleClickCloseBtn={this.hideDetail}/>
                }
            </div>
        )
    }
}

export default MovieItemContainer