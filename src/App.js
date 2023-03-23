import './App.css';
// import { useState, useRef, useEffect } from 'react'
import MemCards from './Components/MemCards'

function App() {

    function newGame() {
        window.location.reload(false)
    }

    return (
        <div className="App">
            <h1>Elden Ring Memory Game</h1>
            <MemCards />
            <button onClick={newGame}>New Game</button>
        </div>
    );
}


export default App;
