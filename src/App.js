import './App.css';
import { useState } from 'react'
// import { useState, useRef, useEffect } from 'react'
import MemCards from './Components/MemCards'

function App() {

    const [moveCounter, setMoveCounter] = useState(0)
    const [completion, setCompletion] = useState(0)

    function newGame() {
        window.location.reload(false)
    }

    function gameStatus(completion) {
        if (completion == 6) {
            return "Game Complete"
        } else {
            return ""
        }
    }

    return (
        <div className="App">
            <h1>Elden Ring Memory Game</h1>
            <h3>{gameStatus(completion)}</h3>
            <MemCards
                moveCounter={moveCounter} setMoveCounter={setMoveCounter}
                completion={completion} setCompletion={setCompletion} />
            <h2>Moves: {moveCounter}</h2>
            <button onClick={newGame}>New Game</button>
        </div>
    );
}


export default App;
