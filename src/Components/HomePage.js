import React from 'react';
import MovieInfo from './MovieInfo';
import './Main.css';

const HomePage = (props) => {
    console.log(props.movies)
        
    return (
        <div>
            <h1 className='main-title'>Studio Ghibli Films </h1>
            <MovieInfo movies={props.movies} />
        </div >
    )

}

export default HomePage;


