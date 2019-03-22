import React from 'react'
import './EditBtn.css'

const EditBtn = ({ handleClick }) => {
    return (
        <div className='EditBtn' onClick={handleClick}>
            <svg className='icon'>
                <use xlinkHref="img/symbol-defs.svg#icon-pencil"></use>
            </svg>
        </div>
    )
}

export default EditBtn