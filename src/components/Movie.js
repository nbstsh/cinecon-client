import React from 'react'


const Movie = ({_id, title, director, releaseYear, genre, runningTime, starring, country}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                <li>{director}</li>
                <li>{releaseYear}</li>
                <li>{genre}</li>
                <li>{runningTime}</li>
                <li>{starring}</li>
                <li>{country}</li>
            </ul>
        </div>
    )
}

export default Movie