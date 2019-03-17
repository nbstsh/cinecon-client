import React, { Component } from 'react'
import TextInput from '../common/TextInput'
import ErrorMessage from '../common/ErrorMessage'
import './GenreForm.css'
import manager from '../../modules/genre-manager'
const DEFAULT_COLOR = '#ffffff'


class GenreForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            color: DEFAULT_COLOR,
            errorMessage: ''
        }
    }
    componentDidMount() {
        if (!this.props.id) return 
        
        manager.getGenre(this.props.id) 
            .then(genre => this.setState(genre))
    }
    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState((state) => state[key] = value)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const update = { name: this.state.name, color: this.state.color }

        const requestPromise = this.props.id ? 
            manager.putAndSetGenre(this.props.id, update) : 
            manager.postAndSetGenre(update)
            
        const handleAfterSubmit = this.props.handleAfterSubmit || function(){
            this.setState({ name: '', color: DEFAULT_COLOR, errorMessage: '' })
        }.bind(this)

        requestPromise
            .then(() => handleAfterSubmit())
            .catch(err => this.setState({ errorMessage: err.message}))
    }
    render() {
        return (
            <form className='GenreForm' onSubmit={this.handleSubmit}>
                <ErrorMessage 
                    message={this.state.errorMessage} />
                <TextInput 
                    name='name'
                    value={this.state.name} 
                    handleChange={this.handleChange} 
                    placeholder='genre name' />
                <input 
                    type='color' 
                    name='color' 
                    value={this.state.color}
                    onChange={this.handleChange}/>

                <input type="submit" value=""></input>
                <button>
                    <svg className="">
                        <use xlinkHref="img/symbol-defs.svg#icon-check"></use>
                    </svg>
                </button>
            </form>
        )
    }
}

export default GenreForm