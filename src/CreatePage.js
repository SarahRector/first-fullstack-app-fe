import React, { Component } from 'react';
import { createDerbyPlayer, fetchPositions } from './derby-players-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        derby_name: 'Smarty Pants',
        jersey_number: 5,
        is_retired: true,
        position_id: 1,
        positions: [],
    }

    componentDidMount = async () => {
        const positionsData = await fetchPositions();

        this.setState({
            positions: positionsData.body
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
        await createDerbyPlayer({
            derby_name: this.state.derby_name,
            jersey_number: this.state.jersey_number,
            is_retired: this.state.is_retired,
            position_id: this.state.position_id
        });

        this.setState({
            derby_name: '',
            jersey_number: 123,
            is_retired: false,
            position_id: 1,
        });

        this.props.history.push('/');

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

    render() {
        return (
            <div className="form">
                <h2>Add a New Derby Player!</h2>
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
                        <select onChange={this.handlePositionChange}>
                            <option value={1}>Blocker</option>
                            <option value={2}>Jammer</option>
                            <option value={3}>Pivot</option>
                        </select>
                    </label>
                    <button>Add Player</button>
                </form>
                
            </div>
        )
    }
}
