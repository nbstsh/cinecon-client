import React, { Component } from 'react'
import './ModalControll.css'

class ModalControll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
    }
    openModal = () => {
        document.querySelector('.modal-trigger').setAttribute('checked', true);
        this.setState({ isModalOpen: true })
    }
    closeModal = () => {
        document.querySelector('.modal-trigger').setAttribute('checked', false);
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
                className="modal-trigger hidden"  
                onChange={this.openModal}
            />
        )
    }
    generateModalBoilerplate(content) {
        const className = this.state.isModalOpen ? "" : "d-none";
        return (
            <div className={className}>
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


export default ModalControll