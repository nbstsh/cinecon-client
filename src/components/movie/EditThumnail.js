import React, { Component } from 'react'
import './EditThumnail.css'

class EditThumnail extends Component {
    render() {
        // TODO replace with data
        const img = 'https://upload.wikimedia.org/wikipedia/en/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg'

        return (
            <div className='EditThumnail'>
                <img src={img} style={{objectFit: 'cover', width: '100%'}} />
            </div>
        )
    }
}

export default EditThumnail