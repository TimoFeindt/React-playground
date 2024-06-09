import MemoryCard from './components/MemoryCard';

import image1 from './images/Endboss.jpg';
import image2 from './images/Enemy1.jpg';
import image3 from './images/Enemy2.jpg';
import image4 from './images/Hero.jpg';
import './App.css';

function App() {

  const difficulty = 3;

  

  return (
    <div className="App">
      <h1>Memory</h1>
      	
      <MemoryCard
        image= {image1}
      />
      <MemoryCard
        image= {image1}
      />
      <MemoryCard
        image= {image2}
      />
      <MemoryCard
        image= {image2}
      />
      <MemoryCard
        image= {image3}
      />
      <MemoryCard
        image= {image3}
      />
      <MemoryCard
        image= {image4}
      />
      <MemoryCard
        image= {image4}
      />
      
    </div>
  );
}

export default App;
