import React, { Component } from 'react'
import movieManager from '../../modules/movie-manager'
import GenreBadge from '../genre/GenreBadge'
import GenresDisplay from './GenresDisplay'
import EditBtn from '../common/EditBtn'
import userManager from '../../modules/user-manager'
import './MovieItem.css'

class MovieItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            needShowDetail: false,
            isAdmin: false
        }
    }
    componentDidMount() {
        movieManager.getMovie(this.props.id)
            .then(movie => this.setState(movie))

        this.initIsAdmin()
        userManager.on(userManager.UPDATE_EVENT, this.initIsAdmin)
    }
    componentWillUnmount() {
        userManager.off(userManager.UPDATE_EVENT, this.initIsAdmin)
    }
    initIsAdmin = () => {
        this.setState({ isAdmin: userManager.isAdminUser() })
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
        const {title, director, releaseYear, genres, runningTime, starring, country, needShowDetail, thumnail} = this.state
     
        return(
            // <div className="MovieItem" onClick={this.props.handleClick} >
            <div className="MovieItem" data-open-detail={needShowDetail}>
                <figure onClick={this.showDetail}>
                    <img src={thumnail} />
                </figure>

                <div onClick={this.toggleDetail}>
                    <h3>{title}</h3>
                    {this.state.isAdmin && 
                        <EditBtn handleClick={this.handleEditBtnClick}/>
                    }
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
                <GenresDisplay  genres={genres} placeholder='ジャンルなし' />
            </div>
        )
    }
}

export default MovieItem
