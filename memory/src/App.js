import MemoryCard from './components/MemoryCard';
import { useState } from 'react';
import image1 from './images/Endboss.jpg';
import image2 from './images/Enemy1.jpg';
import image3 from './images/Enemy2.jpg';
import image4 from './images/Hero.jpg';
import image5 from './images/Villain5.jpg';
import image6 from './images/Woman1.jpg';
import './App.css';

function App() {
  const babyDifficult = [ image1, image1, image2, image2, image3, image3 ];
  const easyDifficult = [ image1, image1, image2, image2, image3, image3, image4, image4 ];
  const mediumDifficult = [ image1, image1, image2, image2, image3, image3, image4, image4, image5, image5 ];
  const hardDifficult = [ image1, image1, image2, image2, image3, image3, image4, image4, image5, image5, image6, image6 ];

  const [imageList, setImageList] = useState(babyDifficult)

  const randomizeImageList = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleShuffle = () => {
    const shuffledImageCards = randomizeImageList([...imageList]);
    setImageList(shuffledImageCards)
  }


  //increase number of cards

  const setDifficutly = (level) => {
    addCards(level)
  }

  const addCards = (level) => {
    if(level === 'Baby') {
      setImageList(babyDifficult)
    } else if(level === 'Easy') {
      setImageList(easyDifficult)
    } else if(level === 'Medium') {
      setImageList(mediumDifficult)
    } else if(level === 'Hard') {
      setImageList(hardDifficult)
    }
  }
  
  const RenderCards = imageList.map((image, index) => {
    return (
      <MemoryCard image={image} key={index} />
    )
  })

  return (
    <div className="App">
      <h1>Memory</h1>
      <h3>Set Difficulty</h3>
      <button onClick={() => setDifficutly('Baby')}>Baby</button>
      <button onClick={() => setDifficutly('Easy')}>Easy</button>
      <button onClick={() => setDifficutly('Medium')}>Medium</button>
      <button onClick={() => setDifficutly('Hard')}>Hard</button>

      <button onClick={handleShuffle}>Shuffle Cards</button>


      <div className='box'>
        
        {RenderCards}
      </div>
      
      
    </div>
  );
}

export default App;
