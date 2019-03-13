import React from 'react'
import './NavigationTab.css'

const NavigationTab = ({content}) => {
    return (
        <div className='NavigationTab'>
            <span>{content}</span>
        </div>
    )
}

export default NavigationTab