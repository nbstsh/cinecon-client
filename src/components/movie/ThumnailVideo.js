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
    handleVideoClick = () => {
        const videoEl = document.getElementById(this.videElementId)
        const canvasEl = document.querySelector('#canvas')
        const ctx = canvasEl.getContext('2d')
        ctx.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height)
        canvasEl.toBlob(blob => {
            this.props.setImageBlob(blob)
            this.props.hideThumnailVideo()
        })
    }
    render() {
        return (
            <div className='ThumnailVideo'>
                <p>カメラ準備中．．．</p>
                <video id={this.videElementId} autoPlay onClick={this.handleVideoClick}></video>
                <canvas id='canvas'></canvas>
            </div>
        )
    }
}

export default ThumnailVideo