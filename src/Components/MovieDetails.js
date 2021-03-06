import React, { Component } from 'react';
import axios from 'axios';

class MovieDetails extends Component {
    constructor() {
        super()
        this.state = {
            movie: [],
            people: [],
            tmdb: [],

        }
    }
    componentWillMount() {
        axios.get(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`).then(res => {
            console.log(res.data.title)
            this.setState({ movie: res.data })
            console.log(this.state.movie)
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=64df366c8c4778879b5869a1fd5b9d8a&query=${this.state.movie.title}`).then(res => {
                console.log(res.data, 'here')
                this.setState({ tmdb: res.data.results[0] })

            })
        })
    }

    getPeople() {
        axios.get(`https://ghibliapi.herokuapp.com/people`).then(res => {
            console.log(res.data)
            this.setState({ people: res.data })
        })
    }



    render() {
        let people = this.state.people.map((person, index) => {
            for (let i = 0; i < this.state.people.length; i++) {
                if (`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}` === `${person.films}`) {
                    return (
                        <div key={index}>
                            <div className="ui cards">
                                <div className="card">
                                    <div className="content">
                                        <div className="header">Name: {person.name}</div>
                                        <div className="ui list">
                                            <li><span className='list-text'>Age:</span> {person.age}</li>
                                            <li><span className='list-text'>Gender:</span> {person.gender}</li>
                                            <li><span className='list-text'>Eye Color:</span> {person.eye_color}</li>
                                            <li><span className='list-text'>Hair Color:</span> {person.hair_color}</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                }
            }
        })

        return (
            <div className='ui container'>
                <h1 className="ui header">
                    {this.state.tmdb.original_title}
                </h1>
                    <p className='original-title'>({this.state.movie.title})</p>
                    {/* <p className='original-title'>{this.state.tmdb.original_title}</p> */}
                
                <div className="ui centered grid container">

                    <img className='poster-image' src={`https://image.tmdb.org/t/p/original${this.state.tmdb.poster_path}`} />
                    <img className='poster-image' src={`https://image.tmdb.org/t/p/original${this.state.tmdb.backdrop_path}`} />
                </div>




                <h4 className="ui horizontal divider header">
                    <i className="film icon"></i>
                    Description
                </h4>
                <p>{this.state.movie.description}</p>


                <h4 className="ui horizontal divider header">
                    Details
                </h4>
                <table className="ui definition table">
                    <tbody>
                        <tr>
                            <td className="two wide column">Director</td>
                            <td>{this.state.movie.director}</td>
                        </tr>
                        <tr>
                            <td>Producer</td>
                            <td>{this.state.movie.producer}</td>
                        </tr>
                        <tr>
                            <td>Release Date</td>
                            <td>{this.state.movie.release_date}</td>
                        </tr>
                        <tr>
                            <td>Rotten Tomato Score</td>
                            <td>{this.state.movie.rt_score}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="ui button character" onClick={() => this.getPeople()}>Characters</button>
                <div className='ui centered grid'>
                    {people}
                </div>
            </div>
        )

    }
}
export default MovieDetails