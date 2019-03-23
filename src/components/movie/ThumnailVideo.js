import React, { Component } from 'react'
import './ThumnailVideo.css'
import ErrorMessage from '../common/ErrorMessage'

const IMG_WIDTH = 1000;

class ThumnailVideo extends Component {
    constructor(props) {
        super(props)
        this.videElementId = 'video-' + new Date().getTime() 
        this.state = {
            isStreamReady: false,
            errorMessage: null
        }
    }
    componentDidMount() {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: "environment" } } })
            .catch(err => {
                return navigator.mediaDevices.getUserMedia({ video: true })
            })
            .then(stream => {
                this.setState({ isStreamReady: true })
                const videoEl = document.getElementById(this.videElementId)
                videoEl.srcObject = stream
            })
            .catch(err => {
                this.setState({ errorMessage: 'カメラを使用することができません' })
            })
    }
    componentWillUnmount() {
        const srcObject = document.getElementById(this.videElementId).srcObject
        if (!srcObject) return 

        srcObject.getVideoTracks().forEach((track) => {
            track.stop()
        })
    }
    handleVideoClick = () => {
        const videoEl = document.getElementById(this.videElementId)
        const canvasEl = document.querySelector('#canvas')
        const ctx = canvasEl.getContext('2d')

        const imgHeight = videoEl.videoHeight / (videoEl.videoWidth / IMG_WIDTH)
        canvasEl.width = IMG_WIDTH
        canvasEl.height = imgHeight

        ctx.drawImage(videoEl, 0, 0, IMG_WIDTH, imgHeight)
        canvasEl.toBlob(blob => {
            this.props.setImageBlob(blob)
            this.props.hideThumnailVideo()
        })
    }
    render() {
        return (
            <div className='ThumnailVideo'>
                {this.state.errorMessage ? (
                    <ErrorMessage message={this.state.errorMessage} />
                ) : (
                    <p>カメラ準備中．．．</p>
                )}
                
                <video id={this.videElementId} autoPlay onClick={this.handleVideoClick}></video>
                <canvas id='canvas'></canvas>
            </div>
        )
    }
}

export default ThumnailVideo