import React, { Component } from 'react';
import HomePage from './Components/HomePage';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    movies: []
  }
  componentDidMount() {
    axios.get('https://ghibliapi.herokuapp.com/films').then(res => {
      console.log(res.data)
      this.setState({ movies: res.data })
    })
  }
  render() {
    return (
      <div>
        <HomePage movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
