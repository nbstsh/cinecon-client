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
    render() {
        console.log('test', this.state.genres[0])
        return (
            <div className="GenreList">
                {this.state.genres.map(genre => <GenreItem key={genre._id} genre={genre} />)}
                <GenreForm successHandler={this.pushGenre}/>
                <GenreForm genre={{ _id: '5c83871445049ab6b9d61e0a', name: 'drama', color: '#ffffff'}} successHandler={this.updateGenre}/>
            </div>
        )
    }
}


export default GenreList