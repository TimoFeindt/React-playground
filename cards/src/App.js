import { useState } from "react";
import Card from "./Card";
import './index.css'
import Ocean from './img/Ocean.jpg';
import Desert from './img/Desert.jpg'
import IceDesert from './img/iceDesert.jpg'
import Mountain from './img/Mountain.jpg'

function App() {

  const initialCardObject = [
    {
      cardImage: Ocean,
      cardHeadline: 'Ocean',
      cardDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.'
    }, 
    {
      cardImage: Desert,
      cardHeadline: 'Desert',
      cardDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.  Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.'
    }, 
    {
      cardImage: IceDesert,
      cardHeadline: 'Ice',
      cardDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.'
    }, 
    {
      cardImage: Mountain,
      cardHeadline: 'Mountain',
      cardDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.  Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.'
    }, 
  ] 

  return (
    <div className="container">
      {initialCardObject.map(card => 
        {
          return <Card card={card} />
        })  
      }
    </div>
  );
}

export default App;
