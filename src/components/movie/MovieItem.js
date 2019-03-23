import React, { Component } from 'react'
import movieManager from '../../modules/movie-manager'
import GenreBadge from '../genre/GenreBadge'
import GenresDisplay from './GenresDisplay'
import EditBtn from '../common/EditBtn'
import './MovieItem.css'

class MovieItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            needShowDetail: false
        }
    } 
    componentDidMount() {
        movieManager.getMovie(this.props.id)
            .then(movie => this.setState(movie))
    }
    showDetail = () => {
        this.setState({ needShowDetail: true })
    }
    hideDetail = () => {
        this.setState({ needShowDetail: false })
    }
    toggleDetail = () => {
        this.setState({ needShowDetail: !this.state.needShowDetail })
    }
    handleEditBtnClick = (event) => {
        event.stopPropagation()
        this.props.handleEditBtnClick()
    }
    render() {
        const {title, director, releaseYear, genres, runningTime, starring, country, needShowDetail} = this.state
        // TODO replace with data
        const img = 'https://upload.wikimedia.org/wikipedia/en/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg'
     
        return(
            // <div className="MovieItem" onClick={this.props.handleClick} >
            <div className="MovieItem" data-open-detail={needShowDetail}>
                <figure onClick={this.showDetail}>
                    <img src={img} />
                </figure>

                <div onClick={this.toggleDetail}>
                    <h3>{title}</h3>
                    <EditBtn handleClick={this.handleEditBtnClick}/>
                </div>
                
                <ul onClick={this.hideDetail}>
                    <li>
                        <label>director</label>
                        <span>{director}</span>
                    </li>
                    <li>
                        <label>releaseYear</label>
                        <span>{releaseYear}</span>
                    </li>
                    <li>
                        <label>runningTime</label>
                        <span>{runningTime}</span>
                    </li>
                    <li>
                        <label>starring</label>
                        <span>{starring}</span>
                    </li>
                    <li>
                        <label>country</label>
                        <span>{country}</span>
                    </li>
                </ul>
                <GenresDisplay  genres={this.state.genres} />
            </div>
        )
    }
}

export default MovieItem
