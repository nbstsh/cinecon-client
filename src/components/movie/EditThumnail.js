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
            needShowThumnailUpload: false
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
        this.props.setImageBlob(imageBlob)
    }
    handleBackClick = () => {
        this.props.setImageBlob(null)
        this.hideThumnailVideo()
        this.hideThumnailUpload()
    }
    handleVideoBtnClick = () => {
        this.props.setImageBlob(null)
        this.hideThumnailUpload()
        this.showThumnailVideo()
    }
    handleFileBtnClick = () => {
        this.props.setImageBlob(null)
        this.hideThumnailVideo()
        this.showThumnailUpload()
    }
    render() {
        // TODO replace with data
        const img = 'https://upload.wikimedia.org/wikipedia/en/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg'

        const { needShowThumnailVideo, needShowThumnailUpload } = this.state
        const imageBlob = this.props.imageBlob

        const needsCurrentImage = ( !needShowThumnailVideo && !needShowThumnailUpload && !imageBlob )
        const needsUpdateImage = ( imageBlob !== null )
        const selectedStatus = { needsCurrentImage, needShowThumnailUpload, needShowThumnailVideo }

        console.log(imageBlob)

        return (
            <div className='EditThumnail'>
                {needsCurrentImage && 
                    <img src={img} />
                }

                {needsUpdateImage && 
                    <img src={URL.createObjectURL(imageBlob)} />
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