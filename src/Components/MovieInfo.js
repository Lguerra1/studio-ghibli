import React from 'react';

const MovieInfo = (props) => {
    console.log(props.movies, 'movies')
    return (
        <div className='ui link cards container'>
            <div className="card ">
                <div className="image">
                    <img src=' '/>

                </div>
                <div className="content">
                    <div className="header">{props.movies.title}</div>
                    <div className="meta">
                        <a>Director: {props.movies.director}</a>
                    </div>
                    <div className="description">
                        {props.movies.description}
                    </div>
                </div>
                <div className="extra content">
                    <span className="left floated">
                        Release Date: {props.movies.release_date}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo


