import React from 'react'
import './MovieFormBtns.css'

const MovieFormBtns = ({ handleCancelClick }) => {
    return (
        <div className='MovieFormBtns'>
            <span onClick={handleCancelClick} className='cancel btn'>Cancel</span>
            <input type='submit' className='submit btn' value='submit' />
        </div>
    )
}


export default MovieFormBtns