import React, { Component } from 'react'
import './MovieSearchFieldContainer.css'
import SearchBtn from '../common/SearchBtn'
import CloseBtn from '../common/CloseBtn'
import MovieSearchField from './MovieSearchField'


class MovieSearchFieldContainer extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            needsOpen: false
        }
    }
    open = () => {
        this.setState({ needsOpen: true })
    }
    close = () => {
        this.setState({ needsOpen: false })
    }
    render() {
        return (
            <div className='MovieSearchFieldContainer'>

                {this.state.needsOpen && 
                    <MovieSearchField />
                }

                {this.state.needsOpen ? (
                    <CloseBtn handleClick={this.close}/>
                ) : (
                    <SearchBtn handleClick={this.open}/>
                )}
                
            </div>
        )
    }
}

export default MovieSearchFieldContainer