import React, { Component } from 'react'
import TextInput from '../common/TextInput'
import NumberInput from '../common/NumberInput'
import ErrorMessage from '../common/ErrorMessage'
import MovieFormBtns from './MovieFormBtns'
import movieManager from '../../modules/movie-manager'
import SelectGenres from './SelectGenres'
import MovieFormToggleBtns from './MovieFormToggleBtns'
import MovieFormInputs from './MovieFormInputs'
import EditThumnail from './EditThumnail'
import './MovieForm.css'



class MovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {
                title: '', 
                director: '', 
                releaseYear: '', 
                genres: [], // [{genre object}]
                runningTime: '', 
                starring: '', 
                country: '',
                thumnail: '' 
            },
            imageBlob: null,
            needShowEditThumnail: false
        }
    } 
    componentDidMount() {
        if (!this.props.id) return 
        movieManager.getMovie(this.props.id).then(this.initMovie)
    }
    initMovie = ({ title, director, releaseYear, genres, runningTime, starring, country }) => {
        this.setState(state => {
            state.movie = { title, director, releaseYear, genres, runningTime, starring, country }
            return state
        })
    }
    handleSubmit = async (event) => {
        event.preventDefault()

        // to maintain genres as array of objects
        const data = { ...this.state.movie }
        // extract id of selected genres
        data.genres = data.genres.map(g => g._id)

        if (this.state.imageBlob) {
            const url = await movieManager.postThumnail(this.state.imageBlob)// TODO: error handling
            data.thumnail = url 

        } 

        const requestPromise = this.props.id ? 
            movieManager.putAndSetMovie(this.props.id, data) : 
            movieManager.postAndSetMovie(data)

        requestPromise
            .then(() => this.props.handleAfterSubmit())
            .catch(err => this.setState({ errorMessage: err.message }))       
    }
    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        
        if (name === 'genres') return this.handleGenresChange(e)
        this.setState((state) => state.movie[name] = value)
    }
    handleGenresChange = (e) => {
        e.target.checked ? 
            this.pushGenre(JSON.parse(e.target.dataset.genre)) : this.removeGenre(e.target.value)
    }
    pushGenre = (genre) => {
        this.setState(({ movie }) => movie.genres.push(genre))
    }
    removeGenre = (id) => {
        this.setState(({ movie }) => {
            const index = movie.genres.findIndex(g => g._id === id)
            return movie.genres.splice(index, 1)
        })
    }
    showEditThumnail = () => {
        this.setState({ needShowEditThumnail: true })
    }
    hideEditThumnail = () => {
        this.setState({ needShowEditThumnail: false })
    }
    setImageBlob = (imageBlob) => {
        this.setState({ imageBlob })
    }
    render() {

        return(
            <div className='MovieForm' data-need-thumnail={this.state.needShowEditThumnail}>

                <ErrorMessage message={this.state.errorMessage} />

                <MovieFormToggleBtns 
                    handleDetailBtnClick={this.hideEditThumnail}
                    handleImageBtnClick={this.showEditThumnail}/>

                <form id='moiveForm' onSubmit={this.handleSubmit}>

                    {this.state.needShowEditThumnail ? (
                        <EditThumnail 
                            thumnail={this.state.movie.thumnail}
                            setImageBlob={this.setImageBlob}
                            imageBlob={this.state.imageBlob}/>
                    ) : (
                        <MovieFormInputs 
                            id={this.props.id}
                            movie={this.state.movie}
                            handleChange={this.handleChange}/>
                    )}


                    <MovieFormBtns
                        handleCancelClick={this.props.handleCancelClick} />
                </form>
            </div>
        )
    }
}


export default MovieForm
