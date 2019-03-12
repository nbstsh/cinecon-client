import React, { Component } from 'react'
import './GenreItemBox.css'
import GenreItem from './GenreItem';
import GenreForm from './GenreForm'
import { deleteGenre } from '../../modules/genres'


class GenreItemBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            needsForm: false
        }
    }
    handleClick = () => {
        const { genre, removeGenre } = this.props
        deleteGenre(genre._id)
            .then(res => removeGenre(res._id))
            // TODO error handling
            .catch(err => console.log(err))
    }
    showForm = () => {
        this.setState({ needsForm: true })
    }
    hideForm = () => {
        this.setState({ needsForm: false  })
    }
    render() {
        const { genre, updateGenre } = this.props
        
        return (
            <div className='GenreItemBox'>
                
                {this.state.needsForm ? (
                    <GenreForm 
                        genre={genre} 
                        handleResponse={updateGenre}
                        handleAfterSubmit={this.hideForm}
                    />
                 ): (
                    <GenreItem 
                        genre={genre} 
                        handleDeleteBtn={this.handleClick}
                        showForm={this.showForm}
                    />
                )}
            </div>
        )
    }
}

export default GenreItemBox