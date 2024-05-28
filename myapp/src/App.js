import Gegner from "./gegner";
import Player from "./player";


import "./main.css"
import { useState } from "react";

function App() {

  const [playerDmgValue, setPlayerDmgValue] = useState(0)
  const [enemyDmgValue, setEnemyDmgValue] = useState(0)

  const [playerTurn, setPlayerTurn] = useState(true);
  const [enemyTurn, setEnemyTurn] = useState(false);
  
//Es muss geschaut werden, was an die funktionen weitergegeben werden kann - mit state
  const playerAttacks = (value) => {
    //console.log('player dmg value')
    //console.log(value)
    setPlayerDmgValue(value);
    setPlayerTurn(false);
    setEnemyTurn(true);
  }

  
  const enemyAttacks = (value) => {
    //console.log('enemy dmg value')
    //console.log(value)
    setEnemyDmgValue(value)
  }

  return (
    <div className="bodyContainer">
      <h1>Battle bereich!</h1>
      <div className="battleContainer">
      
      <Player 
        playerAttack= { playerAttacks }
        enemyAttack= { enemyDmgValue }
        playerTurn= { playerTurn }
      />
      <Gegner
        playerAttack= { playerDmgValue }
        enemyAttack= { enemyAttacks }
        enemyTurn= { enemyTurn }
      />
      </div>
      
    </div>
  );
}

export default App;
