import React from 'react'
import './DeleteBtn.css'

const DeleteBtn = ({ handleClick }) => {
    return (
        <div className='DeleteBtn' onClick={handleClick}>
            <svg className='icon'>
                <use xlinkHref="img/symbol-defs.svg#icon-trashcan"></use>
            </svg>
        </div>
    )
}

export default DeleteBtn