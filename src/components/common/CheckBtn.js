import React from 'react'
import './CheckBtn.css'

const CheckBtn = ({ handleClick }) => {
    return (
        <div className='CheckBtn' onClick={handleClick}>
            <svg className='icon'>
                <use xlinkHref="img/symbol-defs.svg#icon-check"></use>
            </svg>
        </div>
    )
}

export default CheckBtn