import React from 'react'
import './DeleteBtn.css'


const DeleteBtn = ({ handleClick }) => {
    return (
        <svg className='DeleteBtn' onClick={handleClick}>
            <use xlinkHref="img/symbol-defs.svg#icon-trashcan"></use>
        </svg>
    )
}

export default DeleteBtn