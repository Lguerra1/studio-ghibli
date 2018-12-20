import React from 'react';

const MovieInfo = (props) => {
    console.log(props.movie, 'movies')
    return (
        <div className='ui link cards '>
            <div className="card ">

                <div className="content">
                    <div className="header">{props.movie.title}</div>
                    <div className="image">
                        <img className="ui centered small image" src='https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png' />
                    </div>
                    <div className="meta">
                        <a>Director: {props.movie.director}</a>
                    </div>
                    <div className="description">
                        {props.movie.description}
                    </div>
                </div>
                <div className="extra content">
                    <span className="left floated">
                        Release Date: {props.movie.release_date}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo


