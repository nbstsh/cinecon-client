import React from 'react'
import './MovieFormInputs.css'
import SelectGenres from './SelectGenres'

const MovieFormInputs = ({ id, movie, handleChange }) => {
    const { title, director, releaseYear, runningTime, starring, country, genres } = movie
    return (
        <div className='MovieFormInputs'>
            <input 
                type="text" 
                name='title'
                value={title} 
                onChange={handleChange} 
                placeholder='title' />

            <label>director</label>
            <input 
                type="text" 
                name='director' 
                value={director} 
                onChange={handleChange} />

            <label>releaseYear</label>
            <input 
                type="number" 
                name='releaseYear' 
                value={releaseYear} 
                onChange={handleChange} 
                min='1900' />

            <label>runningTime</label>
            <input 
                type="number" 
                name='runningTime' 
                value={runningTime} 
                onChange={handleChange}
                min='1' />
            
            <label>starring</label>
            <input 
                type="text" 
                name='starring'
                value={starring} 
                onChange={handleChange} />

            <label>country</label>
            <input 
                type="text" 
                name='country'
                value={country} 
                onChange={handleChange} />

            <SelectGenres 
                genres={genres}
                handleChange={handleChange} />

        </div>
    )
}


export default MovieFormInputs