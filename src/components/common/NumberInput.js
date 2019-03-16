import React from 'react'
import './NumberInput.css'

const NumberInput = ({ name, value, handleChange, placeholder }) => {
    return (
        <div className="NumberInput">
            <input 
                type="number" 
                name={name} 
                value={value} 
                onChange={handleChange} 
                placeholder={placeholder}/> 
            <label>{placeholder}</label>
        </div>
    )
}


export default NumberInput