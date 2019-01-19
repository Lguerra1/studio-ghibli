import React from 'react';
import MovieInfo from './MovieInfo';
import './Main.css';


const HomePage = (props) => {

    const movie = props.movies.map((movie, index) => {
        return (
            <MovieInfo
                key={index}
                movie={movie}
            />
        )
    })
    return (
        <div>
            <h1 className='main-title'>Studio Ghibli Films
            <br />
                <p className='sub-title'>(Click on a film for more info.)</p>
            </h1>
            <div className="ui centered grid container">
                {movie}
            </div>
        </div >
    )
}

export default HomePage;