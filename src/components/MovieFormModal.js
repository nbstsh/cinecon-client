import React from 'react'
import ModalControll from './common/ModalControll'
import './MovieFormModal.css'
import MovieForm from './MovieForm'
import CreateBtn from './common/CreateBtn'

class MovieFormModal extends ModalControll {
    constructor(props) {
        super(props)
    }
    render() {
        const modal = this.generateModalBoilerplate({
            id: 'movie-form-model',
            content: <MovieForm 
                        handleCancelClick={this.closeModal}
                        handleAfterSubmit={(movie) => {
                            this.props.pushMovie(movie)
                            this.closeModal()
                        }}
                    />
        })

        return (
            <div className="MovieFormModal">
                <CreateBtn handleClick={this.openModal} />
                {modal}
            </div>
        )
    }
}


export default MovieFormModal