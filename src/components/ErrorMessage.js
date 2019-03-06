import React from 'react'

const ErrorMessage = ({ message }) => {
    const style = {
        textAlign: 'center',
        color: '#d01919',
        marginBottom: '2rem'
    }

    return message ? <div style={style}>{message}</div> : null
}

export default ErrorMessage