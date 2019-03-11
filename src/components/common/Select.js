import React, { Component } from 'react'
import './Select.css'


class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const {name, value, options = [], onChange, label} = this.props

        console.log({value, options})

        return(
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
}
/*
const Select = ({name, value, options = [], onChange, label}) => {
    console.log({options, value})
    return (
        <div className="Select">
            <select id="select" name={name} onChange={onChange} value={value}>
                {options.map(option => (
                    <option key={option.key} value={option.value}>{option.text}</option>
                ))}
            </select>
            <label>{label}</label>
        </div>
    ) 
}
*/

export default Select