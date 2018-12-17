import React from 'react';

const HomePage = (props) => {
    console.log(props.movies)
    const renderedMovies = props.movies.map((movie, index) => {
        return (
            <div key={index}>
                <p style={{ fontSize: "20px" }}> {movie.title}</p>
                <p>{movie.description}</p>
            </div>
        )
    })
    return (
        <div>
            <h1>Studio Ghibli Films </h1>
            {renderedMovies}
        </div >
    )

}

export default HomePage;


