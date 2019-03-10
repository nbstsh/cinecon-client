import React from 'react'
import './MovieItem.css'


const MovieItem = ({_id, title, releaseYear, genreName, handleShowDetail}) => {
    return (
        <div className="MovieItem">
            <h3>{title}</h3>
            <label>year:</label>
            <p>{releaseYear}</p>
            <label>genre:</label>
            <p>{genreName}</p>
            <button data-id={_id} onClick={handleShowDetail}>show detail</button>
        </div>
    )
}

export default MovieItem