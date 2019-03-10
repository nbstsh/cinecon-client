import React from 'react'
import './Select.css'


const Select = ({name, value, options = [], onChange, label}) => {
    console.log({options})
    return (
        <div className="Select">
            <select name={name} onChange={onChange} value={value}>
                {options.map(option => (
                    <option key={option.key} value={option.value}>{option.text}</option>
                ))}
            </select>
            <label>{label}</label>
        </div>
    ) 
}

export default Select