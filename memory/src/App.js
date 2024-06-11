import MemoryCard from './components/MemoryCard';
import { useState } from 'react';
import image1 from './images/Endboss.jpg';
import image2 from './images/Enemy1.jpg';
import image3 from './images/Enemy2.jpg';
import image4 from './images/Hero.jpg';
import './App.css';

function App() {

  const [difficulty, setDifficutly] = useState(2)

  const array = [difficulty];

  const RenderCards = () => {
    return array.map(getCard)
  }

  const getCard = (num) => {
    return Array.from({ length: num }, (_, index) => <MemoryCard image={image1} key={index+1} />)
  }
  
  

  return (
    <div className="App">
      <h1>Memory</h1>
      <h3>Set Difficulty</h3>
      <button onClick={() => setDifficutly(4)}>Easy</button>
      <button onClick={() => setDifficutly(6)}>Medium</button>
      <button onClick={() => setDifficutly(8)}>Hard</button>
      	
      <div className='box'>
        
        <RenderCards/>
      </div>
      
      
    </div>
  );
}

export default App;
