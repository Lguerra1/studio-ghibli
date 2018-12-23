import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: props.movie.title,
            director: props.movie.director,
            release_date: props.movie.release_date,
            description: props.movie.description,
            id: props.movie.id
        }
    }


    render() {

        return (
            <Link to={`/moviedetails/${this.state.id}`}><div className='ui link cards ' >
                <div className="card">
                    <div className="content">
                        <div className="header">{this.state.title}</div>
                        <div className="image">
                            <img className="ui centered small image" src='https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png' alt='ghibli logo' />
                        </div>
                        <div className="meta">
                            Director: {this.state.director}
                            <br />
                            Release Date: {this.state.release_date}
                        </div>
                    </div>
                    <div className="extra content">

                    </div>
                </div>
            </div>
            </Link>

        )

    }
}

