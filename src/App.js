import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation'
import MovieContainer from './components/movie/MovieContainer'
import GenresContainer from './components/genre/GenresContainer'
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
    console.log('show genre')
    this.setState({ needsGenre: true })
  }
  hideGenre = () => {
    console.log('hide genre')
    this.setState({ needsGenre: false })
  }
  render() {
    return (
      <div>
        <Navigation 
          handleMovieClick={this.hideGenre}
          handleGenreClick={this.showGenre}/>

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
