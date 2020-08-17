import React from 'react';
import { fetchDerbyPlayers } from './derby-players-api.js';
import { Link } from 'react-router-dom';
import './App.css';

class ListPage extends React.Component {
  state = {
    derby_players: []
  }

  componentDidMount = async () => {
    const data = await fetchDerbyPlayers()

    this.setState({
      derby_players: data.body
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>My Fantasy Derby Team:</h2>
          {
            this.state.derby_players.map((derby_player) => {
              return <Link className="derby_player" to={`/detail/${derby_player.id}`} key={`${derby_player.id}-${derby_player.derby_name}`}>
                <div className="single_player">
                  <label>Derby Name: {derby_player.derby_name}</label>
                  <label>Jersey Number: {derby_player.jersey_number}</label>
                  <label>Currently Retired?: {derby_player.is_retired ? 'Yes' : 'No'}</label>
                  <label>Player Position: {derby_player.player_position}</label>
              </div>
              </Link>
            })
          }
        </header>
        </div>
    );
  }
  }

export default ListPage;
