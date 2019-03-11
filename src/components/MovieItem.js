import React from 'react'
import './MovieItem.css'
import GenreBadge from './genre/GenreBadge'


const MovieItem = ({_id, title, releaseYear, genre, handleShowDetail}) => {
   const genreBadge = genre ? <GenreBadge name={genre.name} color={genre.color} /> : null

    console.log({ genre })

    return (
        <div className="MovieItem">
            <h3>{title}</h3>
            <label>year:</label>
            <p>{releaseYear}</p>
            <label>genre:</label>
            <p>{genreBadge}</p>
            <button data-id={_id} onClick={handleShowDetail}>show detail</button>
        </div>
    )
}

export default MovieItem