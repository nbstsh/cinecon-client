import React from  'react'
import './GenreBadge.css'

const GenreBadge = ({name, color}) => {
    const style = {
        backgroundColor: color,
    }
    return (
        <div className="GenreBadge" style={style}>
            {name}
        </div>
    )
}

export default GenreBadge