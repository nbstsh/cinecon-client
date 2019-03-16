import React from 'react'
import './TextInput.css'

const TextInput = ({name, value, handleChange, placeholder}) => {
    return (
        <div className="TextInput">
            <input 
                type="text" 
                name={name}
                value={value} 
                onChange={handleChange} 
                placeholder={placeholder}
            />
            <label>{placeholder}</label>
        </div>
    )
}


export default TextInput