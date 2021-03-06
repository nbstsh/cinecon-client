import React, { Component } from 'react'
import config from '../config/index'
import { fetchUser, getUser } from '../modules/user'
import GenreList from '../components/genre/GenreList'

const { api } = config

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieId: null
        }
    }
    componentDidMount = () => {
        // fetch(api.movies)
        //     .then(res => {
        //         if (res.ok) return res.json()
        //         throw new Error(`error status code ${res.status}`)
        //     })
        //     .then(data => {
        //         console.log(data)
        //         this.setState({ movieId: data[0]._id})
        //     })
        //     .catch(err => console.log(err))

        fetchUser()
            .then(u => console.log(u))
            .catch(ex => console.error(ex))
    }
    
    render() {
        return (
            <div>
                {/* <MovieForm movieId='5c77cb08c12e7318548d8b48' />
                <MovieDetailBox movieId='5c79190020de9027d3d2f207'/>
                <CloseBtn />
                <MovieFormModal />
                <ModalControll /> */}
                <GenreList />
            </div>
        )
    }
}

export default Test