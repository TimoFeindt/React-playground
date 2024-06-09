
import { useEffect, useState } from 'react';

export default function Gegner({ round,attacks, name, trackWins, enemyAttacks, playerDmgValue, turnCount, turnTrack, image}) {
   
    const [hpValue, setHpValue] = useState(100);
    const [isTurn, setIsTurn] = useState('');
    const [looser, setLooser] = useState('');

    useEffect(()=> {
        if(turnCount % 2) {
            setIsTurn('disabled')
        } else {
            setIsTurn('')
            
            if((hpValue - playerDmgValue) <= 0) {
                setHpValue(0)
                setLooser('lost');
                setIsTurn('disabled')
                trackWins(1)
            } else {
                setHpValue(hpValue - playerDmgValue)
            }
        }
        
    }, [turnCount])

    useEffect(()=> {
        setHpValue(100)
        setLooser('');
    }, [round])

    const handleAttack = (id, dmgValue) => {
        if(id === 3) {
            if((hpValue - dmgValue) > 100) {
                setHpValue(100)
                enemyAttacks(0)
            } else {
                setHpValue(hpValue - dmgValue)
                enemyAttacks(0)
            }
        } else {
            enemyAttacks(dmgValue)
        }
        turnTrack(1)
    };

    return (
        <div className="bodyBox">
            <h3>Ich bin {name}</h3>
            <img src={image} alt="Villian profile pic" className="profilePic"/>
            <span className={looser}></span>
            <span className="hpbar" style={{width: hpValue + '%' }}>HPBAR</span>
            
            <div className="attackContainer">
                {attacks.map((atk) => (
                        <button
                            key={atk.attackId} 
                            disabled={isTurn}
                            className="button attack" 
                            onClick={() => handleAttack(atk.attackId,atk.attackDamage)} >
                                {atk.attackName} ({atk.attackDamage}) 
                        </button> 
                ))} 
            </div>
        </div>
    )
}