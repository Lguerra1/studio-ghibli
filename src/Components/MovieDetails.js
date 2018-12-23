import React, { Component } from 'react';
import axios from 'axios';

export default class Details extends Component {
    constructor() {
        super()
        this.state = {
            movie: [],
            people: []
        }
    }

    componentDidMount() {
        axios.get(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`).then(res => {
            // console.log(this.props.match.params.id)
            // console.log(this.props)
            this.setState({ movie: res.data })
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
                            {/* <div class="ui form">
                                <div class="ui message">
                                    <div class="header">{person.name}</div>
                                    <ul class="list">
                                        <li>Age: {person.age}</li>
                                        <li>Gender: {person.gender}</li>
                                        <li>Eye Color: {person.eye_color}</li>
                                        <li>Hair Color: {person.hair_color}</li>
                                    </ul>
                                </div>
                            </div> */}


                            <div className="ui cards">
                                <div className="card">
                                    <div className="content">
                                        <div className="header">{person.name}</div>
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
                <h1 className="ui header">{this.state.movie.title}</h1>
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

                <button className="ui button" onClick={() => this.getPeople()}>Characters</button>
                <div className='ui centered grid'>
                    {people}
                </div>
            </div>

        )
    }
}