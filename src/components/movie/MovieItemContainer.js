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
            needShowEditForm: false
        }
    }
    showDetail = () => {
        this.setState({ needsDetail: true })
    }
    hideDetail = () => {
        this.setState({ needsDetail: false })
    }
    showEditForm = () => {
        console.log('test')
        this.setState({ needShowEditForm: true })
    }
    hideEditForm = () => {
        this.setState({ needShowEditForm: false })
    }
    render() {
        return(
            <div className='MovieItemContainer' data-need-form={this.state.needShowEditForm}>

                <MovieItem 
                    id={this.props.id}
                    handleClick={this.showDetail}
                    handleEditBtnClick={this.showEditForm}/>

                {this.state.needShowEditForm && (
                    <MovieForm 
                        id={this.props.id}
                        handleAfterSubmit={this.hideEditForm}
                        handleCancelClick={this.hideEditForm}/>
                )}
                
            </div>
        )
    }
}

export default MovieItemContainer