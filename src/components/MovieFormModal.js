import React, { Component } from 'react'
import './MovieFormModal.css'
import MovieForm from './MovieForm'

class MovieFormModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
    }
    openModal = () => {
        this.setState({ isModalOpen: true })
    }
    closeModal = () => {
        this.setState({ isModalOpen: false })
    }
    render() {
        return (
            <div className="MovieFormModal">
                
                <label className="modal-open-btn" onClick={this.openModal}>open</label>
                <input 
                    type="checkbox" 
                    class="modal-trigger"  
                    checked={this.state.isModalOpen} 
                    onChange={this.openModal}/>

                <div class="modal">
                    <div class="modal-bg" onClick={this.closeModal}></div>
                    <div class="modal-body">
                        test
                    </div>
                </div>
            </div>
        )
    }
}


export default MovieFormModal