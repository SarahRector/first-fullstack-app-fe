import React from 'react';
import { fetchDerbyPlayers } from './derby-players-api.js';
import './App.css';

class App extends React.Component {
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
          <h2>Derby Players:</h2>
          {
            this.state.derby_players.map((derby_player) => {
              return <div style={{ margin: 5, padding: 5, border: 'solid 3px purple'}}>
                {derby_player.derby_name} : {derby_player.jersey_number} : {derby_player.is_retired} : {derby_player.position}
              </div>
            })
          }
        </header>
        </div>
    );
  }
  }

export default App;
