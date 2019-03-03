import React from 'react'

const ErrorMessage = ({ message }) => {
    return message ? <div>{message}</div> : null
}

export default ErrorMessage