import React, { Component } from 'react';
import { createDerbyPlayer } from './derby-players-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        derby_name: '',
        jersey_number: 123,
        is_retired: false,
        position: '',
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createDerbyPlayer({
            derby_name: this.state.derby_name,
            jersey_number: this.state.jersey_number,
            is_retired: this.state.is_retired,
            position: this.state.position
        });

        this.setState({
            derby_name: '',
            jersey_number: 123,
            is_retired: false,
            position: '',
        })
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
        this.setState({ position: e.target.value });
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
                        <select onChange={this.handlePositionChange} placeholder="Blocker">
                            <option value="Blocker">Blocker</option>
                            <option value="Jammer">Jammer</option>
                            <option value="Pivot">Pivot</option>
                        </select>
                    </label>
                    <button>Add Player</button>
                </form>
                
            </div>
        )
    }
}
