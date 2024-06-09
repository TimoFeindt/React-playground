import Gegner from "./gegner";
import Player from "./player";

import HeroImage from './img/Hero.jpg';
import EnemyImageAlpha from './img/Enemy1.jpg';
import EnemyImageBeta from './img/Enemy2.jpg';
import EnemyImageOmega from './img/Endboss.jpg';

import "./main.css"
import { useState } from "react";

function App() {

  const [numberOfWins, setNumberOfWins] = useState(0)
  const [playerDmgValue, setPlayerDmgValue] = useState(0)
  const [enemyDmgValue, setEnemyDmgValue] = useState(0)
  const [turnCount, setTurnCount] = useState(1);
  const [key, setKey] = useState(0)

  const playerAttacks = (value) => {
    setPlayerDmgValue(value);
  }

  const enemyAttacks = (value) => {
    setEnemyDmgValue(value)
  }

  const trackTurn = (value) => {
    setTurnCount(turnCount + value)
  }

  const trackWins = (value) => {
    setNumberOfWins(numberOfWins + value)
    setTurnCount(1)
    setKey(key + value)
  }

  const restartBattle = () => {
    window.reload()
  }

  let renderGegner;

  if(numberOfWins === 0) {
    renderGegner =  
    <Gegner
      round= {key}
      name= 'Alpha'
      image={EnemyImageAlpha}
      trackWins= {trackWins}
      playerDmgValue= { playerDmgValue }
      enemyAttacks= { enemyAttacks }
      turnCount= { turnCount}
      turnTrack= {trackTurn}
      attacks = {[
        {
            attackId: 1,
            attackName:'Böser Fausthieb',
            attackDamage:15,
        },
        {
            attackId: 2,
            attackName:'Böser Tritt',
            attackDamage:20,
        },
        {
            attackId: 3,
            attackName:'Böser Verband',
            attackDamage:-20,
        },
        {
            attackId: 4,
            attackName:'Böse Kopfnuss',
            attackDamage:35,
        }
      ]}
    />                      
  } else if (numberOfWins === 1) {
    renderGegner =
    <Gegner
      round= {key}
      image= {EnemyImageBeta}
      name= 'Beta'
      trackWins= {trackWins}
      playerDmgValue= { playerDmgValue }
      enemyAttacks= { enemyAttacks }
      turnCount= { turnCount}
      turnTrack= {trackTurn}
      attacks = {[
        {
            attackId: 1,
            attackName:'Böser Fausthieb 1',
            attackDamage:15,
        },
        {
            attackId: 2,
            attackName:'Böser Tritt 1',
            attackDamage:20,
        },
        {
            attackId: 3,
            attackName:'Böser Verband 1',
            attackDamage:-20,
        },
        {
            attackId: 4,
            attackName:'Böse Kopfnuss 1',
            attackDamage:35,
        }
      ]}
    />
  } else if (numberOfWins === 2) {
    renderGegner =
    <Gegner
      round= {key}
      name= 'Omega'
      image={EnemyImageOmega}
      trackWins= {trackWins}
      playerDmgValue= { playerDmgValue }
      enemyAttacks= { enemyAttacks }
      turnCount= { turnCount}
      turnTrack= {trackTurn}
      attacks = {[
        {
            attackId: 1,
            attackName:'Böser Fausthieb 2',
            attackDamage:15,
        },
        {
            attackId: 2,
            attackName:'Böser Tritt 2',
            attackDamage:20,
        },
        {
            attackId: 3,
            attackName:'Böser Verband 2',
            attackDamage:-20,
        },
        {
            attackId: 4,
            attackName:'Böse Kopfnuss 2',
            attackDamage:35,
        }
      ]}
    />
  }

  return (
    <div className="bodyContainer">
      <h1>Battle bereich!</h1>
      <div className="battleContainer">
      
      <Player 
      round= {key}
      name= 'Hero'
      image= {HeroImage}
      numberOfWins= {numberOfWins}
      trackWins= {trackWins}
      playerAttacks= { playerAttacks }
      enemyDmgValue= { enemyDmgValue }
      turnCount= { turnCount}
      turnTrack= { trackTurn }
      attacks = {[
        {
            attackId: 1,
            attackName:'Fausthieb',
            attackDamage:15,
        },
        {
            attackId: 2,
            attackName:'Tritt',
            attackDamage:20,
        },
        {
            attackId: 3,
            attackName:'Verband',
            attackDamage:-20,
        },
        {
            attackId: 4,
            attackName:'Kopfnuss',
            attackDamage:35,
        }
      ]}
    />
      
      {renderGegner}

      </div>
      <button onClick={() => { window.location.reload();}}>Restart</button>
    </div>
  );
}

export default App;
