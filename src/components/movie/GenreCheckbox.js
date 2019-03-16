import React from 'react'
import GenreBadge from '../genre/GenreBadge';
import './GenreCheckbox.css'

const GenreCheckbox = ({ genre, isSelected, handleChange}) => {
    const { _id, name, color } = genre

    return (
        <div className='GenreCheckBox'>
            <label>
                <input 
                    type='checkbox' 
                    name='genres' 
                    value={_id}
                    data-genre={JSON.stringify(genre)}
                    checked={isSelected}
                    onChange={handleChange}/>
                <GenreBadge name={name} color={color}/>
            </label>
        </div>
    )
}

export default GenreCheckbox