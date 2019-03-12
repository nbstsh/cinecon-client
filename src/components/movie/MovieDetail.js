import React from 'react'
import './MovieDetail.css'

const MovieDetail = (props) => {
    const {title, director, releaseYear, genre, runningTime, starring, country} = props.movie
    const genreName = genre ? genre.name : '';

    return(
        <div className='MovieDetail'>
            <h1>{title}</h1>
            <ul>
                <li><label>director:</label> {director}</li>
                <li><label>releaseYear: </label>{releaseYear}</li>
                <li><label>genre: </label>{genreName}</li>
                <li><label>runningTime: </label>{runningTime}</li>
                <li><label>starring: </label>{starring}</li>
                <li><label>country: </label>{country}</li> 
            </ul>
        </div>
    )
}


export default MovieDetail