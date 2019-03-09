import React, { Component } from 'react'
import TextInput from '../common/TextInput'
import ErrorMessage from '../ErrorMessage'
import './GenreForm.css'
import { postGenre, putGenre } from '../../modules/genres'


class GenreForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            color: '#ffffff',
            errorMessage: ''
        }
    }
    componentDidMount() {
        const { genre } = this.props
        if (!genre) return 

        this.setState({ name: genre.name, color: genre.color })
    }
    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState((state) => state[key] = value)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { genre, handleResponse, handleAfterSubmit } = this.props

        const update = {
            name: e.target.name.value,
            color: e.target.color.value
        }
        
        const requestPromise = genre ? putGenre(genre._id, update) : postGenre(update)

        requestPromise
            .then(res => handleResponse(res))
            .then(() => handleAfterSubmit && handleAfterSubmit())
            .catch(err => this.setState({ errorMessage: err.message }))
    }
    render() {
        const hiddenBgStyle = {
            
        }
        return (
            <form className='GenreForm' onSubmit={this.handleSubmit}>
                <ErrorMessage 
                    message={this.state.errorMessage} 
                />
                <TextInput 
                    name='name'
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    placeholder='genre name'
                />
                <input 
                    type='color' 
                    name='color' 
                    value={this.state.color}
                    onChange={this.handleChange}
                />

                <button></button>
            </form>
        )
    }
}

export default GenreForm