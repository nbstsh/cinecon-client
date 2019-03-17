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
        this.setState({ isModalOpen: true })
    }
    closeModal = () => {
        this.setState({ isModalOpen: false })
    }
    generateModalBoilerplate({ id, content }) {
        const className = `modal-wrap ${this.state.isModalOpen ? '' : 'd-none'}`;
        const handleClick = (event) => {
            event.stopPropagation()
            this.closeModal()
        }

        return (
            <div id={id} className={className}>
                <div className="modal-bg" onClick={handleClick}></div>
                <div className="modal">
                    <div className="modal-body">
                        {content}
                    </div>
                </div>
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