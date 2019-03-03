import React from 'react'


const MovieItem = ({_id, title, releaseYear, genre, handleShowDetail}) => {
    return (
        <div>
            <ul>
                <li>title: {title}</li>
                <li>releaseYear: {releaseYear}</li>
                <li>genre: {genre}</li>
            </ul>
            <button data-id={_id} onClick={handleShowDetail}>show detail</button>
        </div>
    )
}

export default MovieItem