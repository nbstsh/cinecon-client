import React from 'react'
import './GenreItem.css'
import DeleteBtn from '../common/DeleteBtn'


const GenreItem = ({ genre, handleDeleteBtn, showForm}) => {
    const style = { backgroundColor: genre.color }

    return (
        <div className='GenreItem' onClick={showForm}>
            <h2>{genre.name}</h2>
            <span className="color-panel" style={style}></span>
            <DeleteBtn handleClick={handleDeleteBtn}/>
        </div>
    ) 
}


export default GenreItem