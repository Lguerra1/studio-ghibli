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


        // var inactivityTime = function () {
        //     var t;
        //     window.onload = resetTimer;
        //     // DOM Events
        //     document.onmousemove = resetTimer;
        //     document.onkeypress = resetTimer;

        //     function logout() {
        //         alert("You are now logged out.")
        //         //location.href = 'logout.php'
        //     }

        //     function resetTimer() {
        //         clearTimeout(t);
        //         t = setTimeout(logout, 3000)
        //         // 1000 milisec = 1 sec
        //     }
        // };


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