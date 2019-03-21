import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation'
import MovieContainer from './components/movie/MovieContainer'
import GenresContainer from './components/genre/GenresContainer'
import MovieTheater from './components/movie-theater/MovieTheater'
import userManager from './modules/user-manager'

import Test from './components/Test'

class App extends Component {
    constructor(){
        super()
        this.state = {
            needsGenre: false,
            isAdmin: false
        }
    }
    componentDidMount() {
        this.initIsAdmin()
        userManager.on(userManager.UPDATE_EVENT, this.initIsAdmin)
    }
    componentWillUnmount() {
        userManager.off(userManager.UPDATE_EVENT, this.initIsAdmin)
    }
    initIsAdmin = () => {
        this.setState({ isAdmin: userManager.isAdminUser() })
    }
    showGenre = () => {
        this.setState({ needsGenre: true })
    }
    hideGenre = () => {
        this.setState({ needsGenre: false })
    }
    render() {
        return (
            <div>
                <Navigation 
                    handleClickMovie={this.hideGenre}
                    handleClickGenre={this.showGenre}/>

                <div className="container">
                    {this.state.needsGenre && this.state.isAdmin ? (
                    <GenresContainer />
                    ) : (
                    <MovieContainer />
                    )}
                </div>


                 {/* <MovieTheater needMousemove={true} /> */}
            </div>
        )
    }
}

export default App;
