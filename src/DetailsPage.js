import React, { Component } from 'react';
import { fetchDerbyPlayer, deleteDerbyPlayer, updateDerbyPlayer, fetchPositions } from './derby-players-api.js';

export default class DetailsPage extends Component {
    state = {
        derby_player: {},
        derby_name: 'Smarty Pants',
        jersey_number: 5,
        is_retired: true,
        position_id: 3,
        position: '',
        positions: [],
    }

    componentDidMount = async () => {
        const data = await fetchDerbyPlayer(this.props.match.params.id)
        const positionsData = await fetchPositions();
        
        const matchingPosition = positionsData.body.find(position => position.position === data.body.player_position);
        
        this.setState({
            positions: positionsData.body,
            derby_player: data.body,
            jersey_number: data.body.jersey_number,
            is_retired: data.body.is_retired,
            position: matchingPosition.position
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateDerbyPlayer(
                this.props.match.params.id,
                {
                    derby_name: this.state.derby_name,
                    jersey_number: this.state.jersey_number,
                    is_retired: this.state.is_retired,
                    position_id: this.state.position_id,
                });
            const updatedPlayer = await fetchDerbyPlayer(this.props.match.params.id)

            this.setState({
                derby_name: '',
                jersey_number: 206,
                is_retired: false,
                derby_player: updatedPlayer.body,
            });

            } catch(e) {
                console.log(e.message)
            }
    }

    handleNameChange = e => {
        this.setState({ derby_name: e.target.value });
    }

    handleNumberChange = e => {
        this.setState({ jersey_number: e.target.value });
    }

    handleRetiredChange = e => {
        this.setState({ is_retired: e.target.value });
    }

    handlePositionChange = e => {
        this.setState({ position_id: e.target.value });
    }

    handleDelete = async () => {
        await deleteDerbyPlayer(this.props.match.params.id);

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
            <div>
                <p>You just added {this.state.derby_player.derby_name} to your team!</p>
                <p>Their jersey number is {this.state.derby_player.jersey_number} and you are playing them as a {this.state.position}.</p>
            </div>
            <div className="form">
                <h2>Update this Derby Player?</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Derby Name:
                        <input onChange={this.handleNameChange} value={this.state.derby_name}></input>
                    </label>
                    <label>
                        Jersey Number: 
                        <input onChange={this.handleNumberChange} type="number" value={this.state.jersey_number}></input>
                    </label>
                    <label>
                        Currently Retired?
                        <select onChange={this.handleRetiredChange} placeholder="No">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Position:
                        <select onChange={this.handlePositionChange} placeholder="Blocker">
                            <option value="Blocker">Blocker</option>
                            <option value="Jammer">Jammer</option>
                            <option value="Pivot">Pivot</option>
                        </select>
                    </label>
                    <button onClick={this.handleSubmit}>Update Player</button>
                </form>
                <button style={{ background: 'hot pink'}} onClick={this.handleDelete}>Delete Player</button>
            </div>
            </div>
        )
    }
}
