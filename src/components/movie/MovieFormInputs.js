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
                placeholder='タイトル' />

            <label>監督</label>
            <input 
                type="text" 
                name='director' 
                value={director} 
                onChange={handleChange} />

            <label>公開年</label>
            <input 
                type="number" 
                name='releaseYear' 
                value={releaseYear} 
                onChange={handleChange} 
                min='1900' />

            <label>上映時間</label>
            <input 
                type="number" 
                name='runningTime' 
                value={runningTime} 
                onChange={handleChange}
                min='1' />
            
            <label>主演</label>
            <input 
                type="text" 
                name='starring'
                value={starring} 
                onChange={handleChange} />

            <label>国</label>
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