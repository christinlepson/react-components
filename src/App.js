import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm'

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  lastPlayerID = 4;

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (playerName) => {

      const newPlayer = {
          name: playerName,
          score: 0,
          id: this.lastPlayerID + 1
      }

      this.lastPlayerID++;

      this.setState( prevState => {
          return {
              players: [...prevState.players, newPlayer]
          }
      } );

  }

  handleScoreChange = (delta, id) => {
      this.setState( prevState => {
          const player = prevState.players.filter(p => p.id === id)[0];
          return {score: player.score += delta};
      } );
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}           
            score={player.score}
            changeScore={this.handleScoreChange}
          />
        )}

        <AddPlayerForm
            addPlayer={this.handleAddPlayer}
        />

      </div>
    );
  }
}

export default App;
