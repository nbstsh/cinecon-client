import React  from 'react'
import './GenresDisplay.css'
import GenreBadge from '../genre/GenreBadge'


const GenresDisplay = ({ genres, placeholder }) => {
    const needsPlaceholder = !(genres && genres.length >= 1)
    const genreBadges =  genres && genres.map((genre) => (
        <GenreBadge key={genre._id} name={genre.name} color={genre.color} />
    ))
    
    return (
        <div className='GenresDisplay'>
            {needsPlaceholder ? placeholder : genreBadges}
        </div> 
    )
}


export default GenresDisplay