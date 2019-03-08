import React from 'react'


const NumberInput = ({ name, value, onChange, placeholder }) => {
    return (
        <div>
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