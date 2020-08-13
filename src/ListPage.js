import React from 'react';
import { fetchDerbyPlayers, createDerbyPlayer } from './derby-players-api.js';
import { Link } from 'react-router-dom';

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
          <h2>Derby Players:</h2>
          {
            this.state.derby_players.map((derby_player) => {
              return <Link className="derby_player" to={`/detail/${derby_player.id}`} key={`${derby_player.id}-${derby_player.derby_name}`}>
                <div style={{ margin: 5, padding: 5, border: 'solid 3px purple'}}>
                {derby_player.derby_name} : {derby_player.jersey_number} : {derby_player.is_retired ? 'Yes' : 'No'} : {derby_player.position}
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
