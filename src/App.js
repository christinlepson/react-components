import React from 'react';
import './App.css';
import Header from './components/Header';
import PlayerList from './components/PlayerList';
import AddPlayerForm from './components/AddPlayerForm'

const App = () => (
    <div className="scoreboard">
        <Header/>
        <PlayerList/>
        <AddPlayerForm/>
    </div>
);

export default App;