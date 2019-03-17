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
            isCloseBtnClicked: false,
            needsOpen: false
        }
    }
    open = () => {
        this.setState({ isSearchBtnClicked: true })
        setTimeout(() => {
            this.setState({ needsOpen: true })
            this.setState({ isSearchBtnClicked: false })
        }, 100)
    }
    close = () => {
        this.setState({ isCloseBtnClicked: true })
        setTimeout(() => {
            this.setState({ needsOpen: false })
            this.setState({ isCloseBtnClicked: false })
        }, 250)
        
    }
    render() {
        return (
            <div className='MovieSearchFieldContainer' 
                data-sb-clicked={this.state.isSearchBtnClicked}
                data-cb-clicked={this.state.isCloseBtnClicked}
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