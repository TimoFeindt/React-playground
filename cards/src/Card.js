import { useState } from "react"

export default function Card ({card}) {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    return(
        <div className={`card ${isActive ? 'card__active': ''}`} onClick={handleClick}>
            <img src={card.cardImage} alt="" className="card__image" />
            <h3 className="card__headline" >{card.cardHeadline}</h3>
            <p className="card__desc"> {card.cardDescription} </p>
        </div>
    )
}