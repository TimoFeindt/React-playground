import { useState } from 'react';



export default function Attacks(props) {

    const [dmgValue, setDmgValue] = useState(0);
    
    console.log(props.test)

    const useAttack = () => {
        setDmgValue(dmgValue+1)
        
    }

    const listOfAttacks = props.attacks.map(atk => {
        return <button key={atk.attackId} className="button attack" onClick={useAttack}>{atk.attackName} ({atk.attackDamage})</button>
    }) 

    return (
        <div className="attackContainer">
            {listOfAttacks}

            <span>{dmgValue}</span>
        </div>
    )
}