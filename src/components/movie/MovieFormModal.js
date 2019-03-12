import React from 'react'
import ModalControll from '../common/ModalControll'
import MovieForm from './MovieForm'
import CreateBtn from '../common/CreateBtn'
import './MovieFormModal.css'

class MovieFormModal extends ModalControll {
    constructor(props) {
        super(props)
        this.state = {}
    } 
    render() {
        const movieForm = <MovieForm 
            handleCancelClick={this.closeModal}
            handleAfterSubmit={this.closeModal} />
                
        const modal = this.generateModalBoilerplate({
            id: 'movie-form-model',
            content: movieForm
        })

        return(
            <div className="MovieFormModal">
                <CreateBtn handleClick={this.openModal} />
                {modal}
            </div>
        )
    }
}

export default MovieFormModal