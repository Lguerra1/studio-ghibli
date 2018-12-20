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
      console.log(res.data, 'test')
      this.setState({ movies: res.data })
    })
  }
 
  render() {
    return (
      <div>
        
        <div className="ui visible left demo vertical inverted sidebar labeled icon menu">
          <a className="item">
            <i className="home icon"></i>
            Home
  </a>
          <a className="item">
            <i className="block layout icon"></i>
            Movies
  </a>
        </div>
        
        <HomePage movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
