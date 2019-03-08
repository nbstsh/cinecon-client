import React from 'react'


const TextInput = ({name, value, onChange, placeholder}) => {
    return (
        <div>
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