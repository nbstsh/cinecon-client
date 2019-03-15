import React from 'react'
import GenreBadge from '../genre/GenreBadge';
import './GenreCheckbox.css'

const GenreCheckbox = ({ name, color, id , handleChange}) => {
    return (
        <div className='GenreCheckBox'>
            <label>
                <input type='checkbox' name='genres' value={id} onChange={handleChange}/>
                <GenreBadge name={name} color={color}/>
            </label>
        </div>
    )
}

export default GenreCheckbox