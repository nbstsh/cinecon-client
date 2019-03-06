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
        return (
            <div className="MovieFormModal">
                <CreateBtn handleClick={this.openModal} />
                {this.generateModalBoilerplate(
                    <MovieForm 
                        handleCancelClick={this.closeModal}
                        handleAfterSubmit={(movie) => {
                            this.props.pushMovie(movie)
                            this.closeModal()
                        }}
                    />
                )}
            </div>
        )
    }
}


export default MovieFormModal