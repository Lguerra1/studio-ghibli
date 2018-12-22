import React, { Component } from 'react';
import axios from 'axios';

export default class Details extends Component {
    constructor() {
        super()
        this.state = {
            movie: [],
        }
    }

    componentDidMount() {
        axios.get(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`).then(res => {
            this.setState({ movie: res.data })
        })
    }
    render() {
        return (
            <div>
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
            </div>
        )
    }
}