import React, { Component } from 'react';
import HomePage from './HomePage';
import axios from 'axios';



class MainPage extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        axios.get('https://ghibliapi.herokuapp.com/films').then(res => {
            this.setState({ movies: res.data })
        })
    }
    render() {

        return (
            <div>
                <HomePage movies={this.state.movies}
                />

                {/* {inactivityTime()} */}
                
            </div>
        );
    }
}

export default MainPage;