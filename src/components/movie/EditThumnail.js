import React, { Component } from 'react'
import './EditThumnail.css'
import ThumnailVideo from './ThumnailVideo'
import ThumnailUpload from './ThumnailUpload'
import EditThumnailToggleBtns from './EditThumnailToggleBtns'

class EditThumnail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stream: null,
            needShowThumnailVideo: false,
            needShowThumnailUpload: false,
            imageBlob: null
        }
    }
    showThumnailVideo = () => {
        this.setState({ needShowThumnailVideo: true })
    }
    hideThumnailVideo = () => {
        this.setState({ needShowThumnailVideo: false })
    }
    showThumnailUpload = () => {
        this.setState({ needShowThumnailUpload: true })
    }
    hideThumnailUpload = () => {
        this.setState({ needShowThumnailUpload: false })
    }
    setImageBlob = (imageBlob) => {
        this.setState({ imageBlob })
    }
    handleBackClick = () => {
        this.setState({ imageBlob: null })
        this.hideThumnailVideo()
        this.hideThumnailUpload()
    }
    handleVideoBtnClick = () => {
        this.hideThumnailUpload()
        this.showThumnailVideo()
    }
    handleFileBtnClick = () => {
        this.hideThumnailVideo()
        this.showThumnailUpload()
    }
    render() {
        // TODO replace with data
        const img = 'https://upload.wikimedia.org/wikipedia/en/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg'

        const { needShowThumnailVideo, needShowThumnailUpload, imageBlob } = this.state

        const needsCurrentImage = 
            ( !needShowThumnailVideo && !needShowThumnailUpload && !imageBlob )
        const needsUpdateImage = 
            ( !needShowThumnailVideo && !needShowThumnailUpload && imageBlob )
        const selectedStatus = 
            { needsCurrentImage, needShowThumnailUpload, needShowThumnailVideo }

        return (
            <div className='EditThumnail'>
                {needsCurrentImage && 
                    <img src={img} />
                }

                {needsUpdateImage && 
                    <img src={URL.createObjectURL(this.state.imageBlob)} />
                }
                
                {needShowThumnailVideo && 
                    <ThumnailVideo 
                        setImageBlob={this.setImageBlob}
                        hideThumnailVideo={this.hideThumnailVideo} />
                }

                {needShowThumnailUpload && 
                    <ThumnailUpload 
                        setImageBlob={this.setImageBlob}
                        hideThumnailUpload={this.hideThumnailUpload} />
                }
                
                <EditThumnailToggleBtns 
                    status={selectedStatus}
                    handleBackClick={this.handleBackClick} 
                    handleVideoBtnClick={this.handleVideoBtnClick}
                    handleFileBtnClick={this.handleFileBtnClick} />

            </div>
        )
    }
}

export default EditThumnail