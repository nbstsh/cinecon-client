import React from 'react'
import './MovieFormToggleBtns.css'

const MovieFormToggleBtns = ({ handleDetailBtnClick, handleImageBtnClick }) => {
    return (
        <div className='MovieFormToggleBtns'>
            <button 
                className='show-detail-btn' 
                type='button' 
                onClick={handleDetailBtnClick}>映画情報</button>

            <button 
                className='show-thumnail-btn' 
                type='button' 
                onClick={handleImageBtnClick}>画像</button>
        </div>
    )
}

export default MovieFormToggleBtns