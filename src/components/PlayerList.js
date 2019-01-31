import React from 'react';
import {Consumer} from './Context';
import Player from './Player';

const PlayerList = () => {
    return(
        <Consumer> 
            { (context) => {
                return(
                    context.players.map( player =>
                        <Player 
                            name={player.name}
                            id={player.id}
                            key={player.id.toString()}       
                            score={player.score}
                            isHighestScore={player.score === context.highestScore && player.score !== 0}
                        />
                        )
                );
            } }
        </Consumer>
    );
}

export default PlayerList;