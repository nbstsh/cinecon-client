import React from 'react'
import './NumberInput.css'

const NumberInput = ({ name, value, onChange, placeholder }) => {
    return (
        <div className="NumberInput">
            <input 
                type="number" 
                name={name} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}/> 
            <label>{placeholder}</label>
        </div>
    )
}


export default NumberInput