import React, { Component } from 'react'
import './SearchBtn.css'


const SearchBtn = ({ handleClick }) => {
    return (
        <div className='SearchBtn' onClick={handleClick}>
            <svg className='icon'>
                <use xlinkHref='img/symbol-defs.svg#icon-search'></use>
            </svg>
        </div>
    )
}


export default SearchBtn