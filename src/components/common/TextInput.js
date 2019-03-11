import React from 'react'
import './TextInput.css'

const TextInput = ({name, value, onChange, placeholder}) => {
    return (
        <div className="TextInput">
            <input 
                type="text" 
                name={name}
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}
            />
            <label>{placeholder}</label>
        </div>
    )
}


export default TextInput