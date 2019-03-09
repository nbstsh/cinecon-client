import React from 'react'
import './GenreItem.css'

const GenreItem = ({ genre }) => {
    console.log(genre)
    const color = { backgroundColor: genre.color }
    return (
        <div className='GenreItem' >
            <h2>{genre.name}</h2>
            <span className="color-panel" style={color}>{genre.color}</span>
        </div>
    )
} 


export default GenreItem