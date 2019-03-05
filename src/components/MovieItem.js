import React from 'react'
import './MovieItem.css'


const MovieItem = ({_id, title, releaseYear, genre, handleShowDetail}) => {
    return (
        <div className="MovieItem">
            {/* <ul>
                <li>
                    <h3>{title}</h3>
                </li>
                <li>
                    <label>year:</label> {releaseYear}
                </li>
                <li>
                    <label>genre:</label> {genre}
                </li>
            </ul> */}

            <h3>{title}</h3>
            <label>year:</label>
            <p>{releaseYear}</p>
            <label>genre:</label>
            <p>{genre}</p>
            
            <button data-id={_id} onClick={handleShowDetail}>show detail</button>
        </div>
    )
}

export default MovieItem