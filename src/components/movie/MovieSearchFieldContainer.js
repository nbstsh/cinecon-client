import React, { Component } from 'react'
import './MovieSearchFieldContainer.css'
import SearchBtn from '../common/SearchBtn'
import CloseBtn from '../common/CloseBtn'
import MovieSearchField from './MovieSearchField'


class MovieSearchFieldContainer extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isSearchBtnClicked: false,
            needsOpen: false
        }
    }
    open = () => {
        this.setState({ isSearchBtnClicked: true })
        setTimeout(() => {
            this.setState({ needsOpen: true })
            this.setState({ isSearchBtnClicked: false })
        }, 300)
    }
    close = () => {
        this.setState({ needsOpen: false })
    }
    render() {
        return (
            <div className='MovieSearchFieldContainer' 
                data-sb-clicked={this.state.isSearchBtnClicked}
                data-needs-open={this.state.needsOpen}>

                {this.state.needsOpen && 
                    <MovieSearchField />
                }

                {this.state.needsOpen ? (
                    <CloseBtn 
                        handleClick={this.close}/>
                ) : (
                    <SearchBtn
                        isClicked={this.state.searchBtnClicked}
                        handleClick={this.open}/>
                )}
                
            </div>
        )
    }
}

export default MovieSearchFieldContainer