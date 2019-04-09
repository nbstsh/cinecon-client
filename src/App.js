import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import MovieContainer from './components/movie/MovieContainer'
import GenresContainer from './components/genre/GenresContainer'
import userManager from './modules/user-manager'


class App extends Component {
    constructor(){
        super()
        this.state = {
            needsGenre: false,
            isAdmin: false
        }
    }
    componentDidMount() {
        // this.initIsAdmin()
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
                
            </div>
        )
    }
}

export default App;
