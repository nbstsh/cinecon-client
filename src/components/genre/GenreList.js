import React, { Component} from 'react'
import './GenreList.css'
import GenreItem from './GenreItem'
import GenreForm from './GenreForm'
import { fetchGenres } from '../../modules/genres'


class GenreList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genres: []
        }
    }
    componentDidMount() {
        fetchGenres()
            .then(genres => this.setState({ genres }))
            .catch(err => console.log(err))
    }
    pushGenre = (genre) => {
        this.setState(state => state.genres.push(genre))
    }
    render() {
        return (
            <div className="GenreList">
                {this.state.genres.map(genre => <GenreItem key={genre._id} genre={genre} />)}
                <GenreForm pushGenre={this.pushGenre}/>
            </div>
        )
    }
}


export default GenreList