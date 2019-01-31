import React, {Component} from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

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
        ],
    
        highestScore: 0
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

        this.setState( prevState => {
            const newHighScore = prevState.players.reduce( (max, p) => p.score > max ? p.score : max , 0);
            return ({highestScore: newHighScore});
        } );
    }

    render() {
        return(
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                highestScore: this.state.highestScore,
                actions: {
                    changeScore: this.handleScoreChange,
                    removePlayer: this.handleRemovePlayer,
                    addPlayer: this.handleAddPlayer
                }
            }}>
                { this.props.children }
            </ScoreboardContext.Provider>
        );
    }
}
export const Consumer = ScoreboardContext.Consumer;

