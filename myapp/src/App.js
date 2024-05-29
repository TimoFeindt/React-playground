import Gegner from "./gegner";
import Player from "./player";


import "./main.css"
import { useState } from "react";

function App() {

  const [playerDmgValue, setPlayerDmgValue] = useState(0)
  const [enemyDmgValue, setEnemyDmgValue] = useState(0)

  const [turnCount, setTurnCount] = useState(1);
//Es muss geschaut werden, was an die funktionen weitergegeben werden kann - mit state
  const playerAttacks = (value) => {
    setPlayerDmgValue(value);
  }

  const enemyAttacks = (value) => {
    setEnemyDmgValue(value)
  }

  const trackTurn = (value) => {
    setTurnCount(turnCount + value)
  }

  return (
    <div className="bodyContainer">
      <h1>Battle bereich!</h1>
      <div className="battleContainer">
      
      <Player 
        playerAttack= { playerAttacks }
        enemyAttack= { enemyDmgValue }
        turnCount= { turnCount}
        turnTrack= { trackTurn }
      />
      <Gegner
        playerAttack= { playerDmgValue }
        enemyAttack= { enemyAttacks }
        turnCount= { turnCount}
        turnTrack= {trackTurn}
      />
      </div>
      
    </div>
  );
}

export default App;
