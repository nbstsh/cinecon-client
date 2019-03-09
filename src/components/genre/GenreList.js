import React, { Component} from 'react'
import './GenreList.css'
import GenreItem from './GenreItem'
import GenreForm from './GenreForm'
import GenreItemBox from './GenreItemBox'
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
            // TODO error handling
            .catch(err => console.log(err))
    }
    pushGenre = (genre) => {
        this.setState(state => state.genres.push(genre))
    }
    updateGenre = (genre) => {
        this.setState(state => {
            const index = state.genres.findIndex(g => g._id === genre._id)
            if (index < 0) return 

            return state.genres[index] = genre
        })
    }
    removeGenre = (id) => {
        this.setState(state => {
            const index = state.genres.findIndex(g => g._id === id)
            if (index < 0) return 

            return state.genres.splice(index, 1)
        })
    }
    render() {
        console.log('test', this.state.genres[0])
        return (
            <div className="GenreList">
                {this.state.genres.map(genre => (
                    <GenreItemBox 
                        key={genre._id} 
                        genre={genre} 
                        updateGenre={this.updateGenre}
                        removeGenre={this.removeGenre}
                    />
                ))}
                <GenreForm handleResponse={this.pushGenre} />
            </div>
        )
    }
}


export default GenreList