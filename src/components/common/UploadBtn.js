import React from 'react'
import './UploadBtn.css'

const UploadBtn = ({ handleClick }) => {
    return (
        <div className='UploadBtn' onClick={handleClick}>
            <svg className='icon'>
                <use xlinkHref="img/symbol-defs.svg#icon-upload2"></use>
            </svg>
        </div>
    )
}

export default UploadBtn