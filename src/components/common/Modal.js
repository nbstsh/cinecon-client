import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
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
    generateModalWrap(content){
        return (
            <div className="modal-wrap">
                <div className="modal-bg" onClick={this.closeModal}></div>
                <div className="modal">
                    <div className="modal-body">
                        {content}
                    </div>
                </div>
            </div>
        )
    }
    generateModalHiddenTrigger() {
        return (
            <input 
                type="checkbox" 
                className="modal-trigger"  
                checked={this.state.isModalOpen} 
                onChange={this.openModal}
            />
        )
    }
    generateModalBoilerplate(content) {
        return (
            <div>
                {this.generateModalHiddenTrigger()}
                {this.generateModalWrap(content)}
            </div>
        )
    }
    render() {
        return (
            <div>
                <label className="modal-open-btn" onClick={this.openModal}>open</label>
                {this.generateModalBoilerplate('sample')}
            </div>
        )
    }
}


export default Modal