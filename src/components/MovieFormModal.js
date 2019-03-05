import React from 'react'
import Modal from './common/Modal'
import './MovieFormModal.css'
import MovieForm from './MovieForm'
import CreateBtn from './common/CreateBtn'

class MovieFormModal extends Modal {
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