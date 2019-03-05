import React from 'react'
import './CreateBtn.css'

const CreateBtn = ({handleClick}) => {
    return (
        <svg className="CreateBtn" onClick={handleClick}>
            <use xlinkHref="img/symbol-defs.svg#icon-plus"></use>
        </svg>
    )
}

export default CreateBtn