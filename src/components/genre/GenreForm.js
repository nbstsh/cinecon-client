import React, { Component } from 'react'
import TextInput from '../common/TextInput'
import ErrorMessage from '../ErrorMessage'
import './GenreForm.css'
import { postGenre } from '../../modules/genres'


class GenreForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            color: '#ffffff',
            errorMessage: ''
        }
    }
    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState((state) => state[key] = value)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            color: e.target.color.value
        }
        postGenre(data) 
            .then(genre => this.props.pushGenre(genre))
            .catch(err => this.setState({ errorMessage: err.message }))

        
    }
    render() {
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

                <button>submit</button>
            </form>
        )
    }
}

export default GenreForm