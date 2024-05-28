import Gegner from "./gegner";
import Player from "./player";


import "./main.css"

function App() {

  //const [hpValue, setHpValue] = useState(100);

  //die HP hier verarbeiten? Initial evtl die richtige Idee und späterwird die funktion ausgelagert!

//Es muss geschaut werden, was an die funktionen weitergegeben werden kann
  const playerAttack = (value) => {
    //console.log('player dmg value')
    //console.log(value)
    
  }
  const enemyAttack = (value) => {
    //console.log('enemy dmg value')
    //console.log(value)
  }

  return (
    <div className="bodyContainer">
      <h1>Battle bereich!</h1>
      <div className="battleContainer">
      
      <Player 
        playerAttack= { playerAttack }
        enemyAttack= { enemyAttack }
      />
      <Gegner
        playerAttack= { playerAttack }
        enemyAttack= { enemyAttack }
      />
      </div>
      
    </div>
  );
}

export default App;
