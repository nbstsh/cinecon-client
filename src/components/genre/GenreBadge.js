import React from  'react'


const GenreBadge = ({name, color}) => {
    const style = {
        backgroundColor: color,
        color: 'var(--color-grey-light-1)',
        borderRadius: '2px',
        fontSize: '1.3rem',
        padding: '.1rem 1rem',
        transform: 'translateY(10%)'
    }
    return (
        <div className="GenreBadge" style={style}>
            {name}
        </div>
    )
}

export default GenreBadge