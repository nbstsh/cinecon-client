import React from 'react'
import './MovieDetailBtns.css'


const MovieDetailBtns = ({handleClcikEdit, handleClickDelete}) => {
    return (
        <div className="MovieDetailBtns">
            <button onClick={handleClcikEdit}>EDIT</button>
            <button onClick={handleClickDelete}>DELETE</button>
        </div>
    )
}


export default MovieDetailBtns