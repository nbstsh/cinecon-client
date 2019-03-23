import React, { Component } from 'react'
import './ThumnailVideo.css'


class ThumnailVideo extends Component {
    constructor(props) {
        super(props)
        this.videElementId = 'video-' + new Date().getTime() 
        this.state = {
            isStreamReady: false
        }
    }
    componentDidMount() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                this.setState({ isStreamReady: true })
                const videoEl = document.getElementById(this.videElementId)
                videoEl.srcObject = stream
            })
    }
    componentWillUnmount() {
        document.getElementById(this.videElementId).srcObject.getVideoTracks().forEach((track) => {
            track.stop()
        })
    }
    render() {
        return (
            <div className='ThumnailVideo'>
                <p>カメラ準備中．．．</p>
                <video id={this.videElementId} autoPlay></video>
            </div>
        )
    }
}

export default ThumnailVideo