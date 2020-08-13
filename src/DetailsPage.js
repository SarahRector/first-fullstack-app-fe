import React, { Component } from 'react';
import { fetchDerbyPlayer } from './derby-players-api.js';

export default class DetailsPage extends Component {
    state = {
        derby_player: {}
    }

    componentDidMount = async () => {
        const data = await fetchDerbyPlayer(this.props.match.params.id)

        this.setState({
            derby_player: data.body
        })
    }

    render() {
        return (
            <div>
                <p>You just added {this.state.derby_player.derby_name} to your team!</p>
                <p>Their jersey number is {this.state.derby_player.jersey_number} and you are playing them as a {this.state.derby_player.position}.</p>
                <p>If you're wondering if they're currently retired, the answer is: {this.state.derby_player.is_retired}</p>
            </div>
        )
    }
}
