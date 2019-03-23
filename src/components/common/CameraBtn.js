import React from 'react'
import './CameraBtn.css'

const CameraBtn = ({ handleClick }) => {
    return (
        <div className='CameraBtn' onClick={handleClick}>
            <svg className='icon'>
                <use xlinkHref="img/symbol-defs.svg#icon-camera"></use>
            </svg>
        </div>
    )
}

export default CameraBtn