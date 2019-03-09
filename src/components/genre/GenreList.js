import React, { Component} from 'react'
import './GenreList.css'
import GenreItem from './GenreItem'

class GenreList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="GenreList">
                <GenreItem />
            </div>

        )
    }
}


export default GenreList