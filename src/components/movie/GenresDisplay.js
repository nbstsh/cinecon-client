import React  from 'react'
import './GenresDisplay.css'
import GenreBadge from '../genre/GenreBadge'


const GenresDisplay = ({ genres }) => {
    return (
        <div className='GenresDisplay'>
            {genres && genres.map(({ _id, name, color }) => (
                <GenreBadge key={_id} name={name} color={color} />
            ))}
        </div> 
    )
}


export default GenresDisplay