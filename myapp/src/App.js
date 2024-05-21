import Gegner from "./gegner";
import Player from "./player";

import "./main.css"

function App() {
  return (
    <div className="bodyContainer">
      <h1>Battle bereich!</h1>
      <div className="battleContainer">
      <Gegner></Gegner>

      <Player></Player>
      </div>
      
    </div>
  );
}

export default App;
