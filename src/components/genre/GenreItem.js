import React, { Component } from 'react'
import './GenreItem.css'
import DeleteBtn from '../common/DeleteBtn'
import manager from '../../modules/genre-manager'

class GenreItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            color: ''
        }
    }
    componentDidMount() {
        manager.getGenre(this.props.id)
            .then(genre => this.setState(genre))
    }
    handleClickDeleteBtn = (event) => {
        event.stopPropagation()
        this.props.handleClickDeleteBtn()
    }
    render() {
        const style = { backgroundColor: this.state.color } 

        return (
            <div className='GenreItem' onClick={this.props.handleClickGenreItem}>
                <h2>{this.state.name}</h2>
                <span className="color-panel" style={style}></span>
                <DeleteBtn handleClick={this.handleClickDeleteBtn}/>
            </div>
        )
    }
}


export default GenreItem