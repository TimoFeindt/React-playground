
import { useState, useEffect } from 'react';

export default function Player({ round, name, trackWins, attacks, enemyDmgValue, playerAttacks, turnCount, turnTrack, image }) {

    const [hpValue, setHpValue] = useState(100);
    const [isTurn, setIsTurn] = useState('');
    const [looser, setLooser] = useState('');

    useEffect(()=> {
        if(turnCount % 2) {
            setIsTurn('')
            
            if((hpValue - enemyDmgValue) <= 0) {
                setHpValue(0)
                setLooser('lost');
                setIsTurn('disabled')
                trackWins(0)
            } else {
                setHpValue(hpValue - enemyDmgValue)
            }
        } else {
            setIsTurn('disabled')
        }
        
    }, [turnCount])

    useEffect(()=> {
        setHpValue(100)
        setIsTurn('')
        setLooser('');
    }, [round])

    const handleAttackClick = (id, dmgValue) => {
        if(id === 3) {
            if((hpValue - dmgValue) > 100) {
                setHpValue(100)
                playerAttacks(0)
            } else {
                setHpValue(hpValue - dmgValue)
                playerAttacks(0)
            }
        } else {
            playerAttacks(dmgValue)
        }
        turnTrack(1)
    };

    //create own component for HP Bar 

    return (
        <div className="bodyBox">
            <h3>Ich bin {name} Round: {round}</h3>
            <img src={image} alt="" className="profilePic" />
            <span className={looser}></span>
            <span className="hpbar" style={{width: hpValue + '%' }}>HPBAR</span>

            <div className="attackContainer">
                {attacks.map((atk) => (
                        <button 
                            key={atk.attackId} 
                            disabled={isTurn}
                            className="button attack"
                            onClick={() => handleAttackClick(atk.attackId,atk.attackDamage)} >
                                {atk.attackName} ({atk.attackDamage}) 
                        </button> 
                ))}
            </div>
        </div>
    )
};