import React from 'react'
import './CloseBtn.css'

const CloseBtn = ({ handleClick }) => {
    return (
        <svg className="CloseBtn" onClick={handleClick}>
            <use xlinkHref="img/symbol-defs.svg#icon-cross"></use>
        </svg>
    )
}


export default CloseBtn