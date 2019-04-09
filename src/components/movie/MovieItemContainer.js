import React, { Component } from 'react'
import MovieItem from './MovieItem'
import './MovieItemContainer.css'
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
        this.setState({ needShowEditForm: true })
    }
    hideEditForm = () => {
        this.setState({ needShowEditForm: false })
    }
    render() {
        return(
            <div className='MovieItemContainer' data-need-form={this.state.needShowEditForm}>

                

                {this.state.needShowEditForm ? (
                    <MovieForm 
                        id={this.props.id}
                        handleAfterSubmit={this.hideEditForm}
                        handleCancelClick={this.hideEditForm}/>
                ) : (
                    <MovieItem 
                        id={this.props.id}
                        handleClick={this.showDetail}
                        handleEditBtnClick={this.showEditForm}/>
                )}
                
            </div>
        )
    }
}

export default MovieItemContainer