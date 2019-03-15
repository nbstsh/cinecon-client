import React from 'react'
import './CloseBtn.css'

const CloseBtn = ({ handleClick }) => {
    return (
        <div className='CloseBtn' onClick={handleClick}>
            <svg className='icon'>
                <use xlinkHref="img/symbol-defs.svg#icon-cross"></use>
            </svg>
        </div>
    )
}


export default CloseBtn