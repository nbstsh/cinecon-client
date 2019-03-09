import React from 'react'
import './GenreItem.css'
import DeleteBtn from '../common/DeleteBtn'
import { deleteGenre } from '../../modules/genres'


const GenreItem = ({ genre, removeGenre }) => {
    const handleClick = () => {
        deleteGenre(genre._id)
            .then(res => removeGenre(res._id))
            .catch(err => console.log(err))
    }
    const style = {
        backgroundColor: genre.color
    }

    return (
        <div className='GenreItem' >
            <h2>{genre.name}</h2>
            <span className="color-panel" style={style}>{genre.color}</span>
            <DeleteBtn handleClick={handleClick}/>
        </div>
    )
} 


export default GenreItem