import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation'
import MovieContainer from './components/movie/MovieContainer'
import GenresContainer from './components/genre/GenresContainer'

import Test from './components/Test'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <MovieContainer />
          {/* <MovieList /> */}
          {/* <Signin /> */}
          {/* <MovieForm /> */}
          {/* <Test /> */}
          <GenresContainer />
        </div>
      </div>
    )
  }
}

export default App;
