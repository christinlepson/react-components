import React, {Component} from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

    componentDidMount() {
        this.intervalID = setInterval( () => this.tick(), 100 );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    handleStopwatch = () => {
        // toggle isRunning
        this.setState(
            prevState => ({isRunning: !prevState.isRunning})
        );

        // start timer if it's not running
        if (!this.state.isRunning) {
            // set previous time to button click time
            this.setState( prevState => ({
                previousTime: Date.now()
            }) );
            
        }
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }) );
            console.log(this.state.elapsedTime);
        }
    }

    handleReset = () => {
        this.setState( prevState => ({
            previousTime: Date.now(),
            elapsedTime: 0
        }) );
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{Math.floor(this.state.elapsedTime/1000)}</span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;