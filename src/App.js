import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList'
import Signin from './components/Signin'
import MovieForm from './components/MovieForm'

import Test from './components/Test'

class App extends Component {
  render() {
    return (
      <div>
        {/* <MovieList /> */}
        <Signin />
        <MovieForm />
        <Test />
      </div>
    )
  }
}

export default App;
