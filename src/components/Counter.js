import React from 'react';
import {Consumer} from './Context'

const Counter = (props) => {
    return (
        <Consumer>
            { context => 
                (<div className="counter">
                    <button className="counter-action decrement" onClick={ () => {
                        context.actions.changeScore(-1, props.id);
                    } }> - </button>
                    <span className="counter-score">{ props.score }</span>
                    <button className="counter-action increment" onClick={ () =>
                    context.actions.changeScore(1, props.id) }> + </button>
                </div>)
            }
        </Consumer>
    );
  }
 export default Counter;