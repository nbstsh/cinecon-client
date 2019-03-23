import React, { Component } from 'react'
import './EditThumnail.css'
import ThumnailVideo from './ThumnailVideo'

class EditThumnail extends Component {
    constructor(props) {
        super(props)
        this.canvasId = 'canvas-' + new Date().getTime()
        this.state = {
            stream: null,
            needShowThumnailVideo: false,
            imageBlob: null
        }
    }
    showThumnailVideo = () => {
        this.setState({ needShowThumnailVideo: true })
    }
    hideThumnailVideo = () => {
        this.setState({ needShowThumnailVideo: false })
    }
    setImageBlob = (imageBlob) => {
        this.setState({ imageBlob })
    }
    render() {
        // TODO replace with data
        const img = 'https://upload.wikimedia.org/wikipedia/en/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg'
        const needsCurrentImage = !this.state.needShowThumnailVideo && !this.state.imageBlob
        const needsUpdateImage = !this.state.needShowThumnailVideo && this.state.imageBlob

        return (
            <div className='EditThumnail'>
                {needsCurrentImage && 
                    <img src={img} />
                }

                {needsUpdateImage && 
                    <img src={URL.createObjectURL(this.state.imageBlob)} />
                }
                
                {this.state.needShowThumnailVideo && 
                    <ThumnailVideo 
                        setImageBlob={this.setImageBlob}
                        hideThumnailVideo={this.hideThumnailVideo} />
                }

                <div>
                    <button type="button" onClick={this.hideThumnailVideo}>back</button>
                    <button type="button" onClick={this.showThumnailVideo}>camera</button>
                    <button type="button">file</button>
                </div>
            </div>
        )
    }
}

export default EditThumnail