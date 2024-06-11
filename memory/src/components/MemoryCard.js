import { useState } from "react";

export default function MemoryCard({image}) {

    const [stateOfCard, setStateOfCard] = useState('faceDown');
    const [amountOfClicks, setAmountOfClicks] = useState(0)

    const flipCard = () => {
        if(stateOfCard === 'faceDown') {
            setStateOfCard('faceUp')
        } else {
            setStateOfCard('faceDown')
        }
        setAmountOfClicks(amountOfClicks + 1);
    }

    return (
        <div className="cardBox" onClick={flipCard}>
            <div className={`memoryCardBlank ${stateOfCard}`}></div>
            <div>
                <img src={image} alt="Hier kommt ein Bild rein" className="memoryCard"/>
            </div>
        </div>
    )
}