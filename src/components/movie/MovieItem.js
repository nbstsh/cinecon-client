import React, { Component } from 'react'
import movieManager from '../../modules/movie-manager'
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
            <div className="MovieItem" data-open-detail={needShowDetail}>
                <figure onClick={this.showDetail}>
                    <img src={thumnail} alt={`thumnail for ${title}`}/>
                </figure>

                <div onClick={this.toggleDetail}>
                    <h3>{title}</h3>
                    {this.state.isAdmin && 
                        <EditBtn handleClick={this.handleEditBtnClick}/>
                    }
                </div>
                
                <ul onClick={this.hideDetail}>
                    <li>
                        <label>監督</label>
                        <span>{director}</span>
                    </li>
                    <li>
                        <label>公開年</label>
                        <span>{releaseYear}</span>
                    </li>
                    <li>
                        <label>上映時間</label>
                        <span>{runningTime}</span>
                    </li>
                    <li>
                        <label>主演</label>
                        <span>{starring}</span>
                    </li>
                    <li>
                        <label>国</label>
                        <span>{country}</span>
                    </li>
                </ul>
                <GenresDisplay  genres={genres} placeholder='ジャンルなし' />
            </div>
        )
    }
}

export default MovieItem
