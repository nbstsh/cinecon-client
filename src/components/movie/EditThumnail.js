import React, { Component } from 'react'
import './EditThumnail.css'
import ThumnailVideo from './ThumnailVideo'

class EditThumnail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stream: null,
            needShowThumnailVideo: false
        }
    }
    showThumnailVideo = () => {
        this.setState({ needShowThumnailVideo: true })
    }
    hideThumnailVideo = () => {
        this.setState({ needShowThumnailVideo: false })
    }
    render() {
        // TODO replace with data
        const img = 'https://upload.wikimedia.org/wikipedia/en/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg'

        return (
            <div className='EditThumnail'>
                {!this.state.needShowThumnailVideo &&
                    <img src={img} />
                }
                
                {this.state.needShowThumnailVideo && 
                    <ThumnailVideo />
                }

                <div>
                    <button type="button" onClick={this.hideThumnailVideo}>back</button>
                    <button type="button" onClick={this.showThumnailVideo}>camera</button>
                    <button type="button">upload</button>
                </div>
            </div>
        )
    }
}

export default EditThumnail