import React from 'react'
import './NavigationTab.css'

const NavigationTab = ({content, handleClick}) => {
    return (
        <div className='NavigationTab' onClick={handleClick}>
            <span>{content}</span>
        </div>
    )
}

export default NavigationTab