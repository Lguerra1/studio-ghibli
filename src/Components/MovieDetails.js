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

                            <h2 className='ui list peopleFont'>{person.name}</h2>
                            <div className='list'>
                                <div className='item listText'>Age: {person.age}</div>
                                <div className='item listText'>Gender: {person.gender}</div>
                                <div className='item listText'>Eye Color: {person.eye_color}</div>
                                <div className='item listText'>Hair Color: {person.hair_color}</div>
                            </div>
                            <br />
                        </div>
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

                <button className="ui button buttonpadding" onClick={() => this.getPeople()}>Characters</button>
                <div className='ui centered grid'>
                  {people} 
                </div>
            </div>

        )
    }
}