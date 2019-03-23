import React, { Component } from 'react'
import './ThumnailUpload.css'
import CreateBtn from '../common/CreateBtn'

class ThumnailUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleChange = (event) => {
        const file = event.target.files[0]
        this.props.setImageBlob(file)
        this.props.hideThumnailUpload()
    }
    render() {
        return (
            <div className='ThumnailUpload'>
                <label>
                    <CreateBtn />
                    <span>画像ファイルアップロード</span>
                    <input type='file' accept='image/*' onChange={this.handleChange}/>
                </label>
            </div>
        )
    }
}

export default ThumnailUpload