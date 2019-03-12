import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList'
import Signin from './components/Signin'
import MovieForm from './components/MovieForm'
import MovieDetailBox from './components/MovieDetailBox'
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
