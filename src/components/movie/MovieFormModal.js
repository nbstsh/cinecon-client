import React from 'react'
import ModalControll from '../common/ModalControll'
import MovieForm from './MovieForm'
import CreateBtn from '../common/CreateBtn'
import './MovieFormModal.css'

const searchFieldContainerZindex = 1000;

class MovieFormModal extends ModalControll {
    render() {
        const movieForm = <MovieForm 
            handleCancelClick={this.closeModal}
            handleAfterSubmit={this.closeModal} />
                
        const modal = this.generateModalBoilerplate({
            id: 'movie-form-modal',
            content: movieForm
        })

        // to display MovieSearchFieldContainer under modal if modal is open
        const style = {
             zIndex: searchFieldContainerZindex + (this.state.isModalOpen ? 1 : -1) 
        }

        return(
            <div className="MovieFormModal" style={style}>
                <CreateBtn handleClick={this.openModal} />
                {modal}
            </div>
        )
    }
}

export default MovieFormModal