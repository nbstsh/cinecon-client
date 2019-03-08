import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList'
import Signin from './components/Signin'
import MovieForm from './components/MovieForm'
import MovieDetailBox from './components/MovieDetailBox'
import Navigation from './components/navigation/Navigation'

import Test from './components/Test'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <MovieList />
          {/* <Signin /> */}
          {/* <MovieForm /> */}
          {/* <Test /> */}
          
        </div>
      </div>
    )
  }
}

export default App;
