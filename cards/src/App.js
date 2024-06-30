import { useState } from "react";
import Card from "./Card";
import './index.css'

function App() {

  const initialCardObject = [
    {
      cardImage: '#',
      cardHeadline: 'Headline',
      cardDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.'
    }, 
    {
      cardImage: '#',
      cardHeadline: 'Headline 2',
      cardDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.  Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.'
    }, 
    {
      cardImage: '#',
      cardHeadline: 'Headline 3',
      cardDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.'
    }, 
    {
      cardImage: '#',
      cardHeadline: 'Headline 4',
      cardDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.  Corrupti facere illo reiciendis aperiam aliquam aut fugit nihil odio ipsum voluptas suscipit quae ipsa, maxime impedit neque praesentium soluta quidem exercitationem.'
    }, 
  ]

  const [cardList, setCardList] = useState(initialCardObject)
  

  return (
    <div className="container">
      {cardList.map(card => 
        {
          return <Card card={card} />
        })  
      }
    </div>
  );
}

export default App;
