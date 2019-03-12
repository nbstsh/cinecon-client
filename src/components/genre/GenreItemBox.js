import React, { Component } from 'react'
import './GenreItemBox.css'
import GenreItem from './GenreItem';
import GenreForm from './GenreForm'
import { deleteGenre } from '../../modules/genres'
import manager from '../../modules/genre-manager'

class GenreItemBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            needsForm: false,
            id: props.id
        }
    }
    deleteGenre = () => {
        manager.deleteGenre(this.props.id)
            .then(() => this.setState({ id: null }))
    }
    showForm = () => {
        this.setState({ needsForm: true })
    }
    hideForm = () => {
        this.setState({ needsForm: false  })
    }
    render() {
        if (!this.state.id) return null

        return (
            <div className='GenreItemBox'>
                
                {this.state.needsForm ? (
                    <GenreForm 
                        id={this.props.id}
                        handleAfterSubmit={this.hideForm}
                    />
                 ) : (
                    <GenreItem 
                        id={this.props.id}
                        handleClickGenreItem={this.showForm}
                        handleClickDeleteBtn={this.deleteGenre}
                    />
                )}
            </div>
        )
    }
}

export default GenreItemBox