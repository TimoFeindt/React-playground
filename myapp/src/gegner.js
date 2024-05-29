import Enemy1Pic from './img/Enemy1.jpg';
import { useEffect, useState } from 'react';

export default function Gegner({ enemyAttack, playerAttack, turnCount, turnTrack}) {
   
    const [hpValue, setHpValue] = useState(100);
    const [isTurn, setIsTurn] = useState('');


    /* const testTurn = () => {
        if(!enemyTurn) {
            if((hpValue - playerAttack) <= 0) {
                 setHpValue(0)
             }else {
                 setHpValue(hpValue - playerAttack)
                 //enemyTurn(false)
             }
         }
    } */
    //testTurn();
    
    useEffect(()=> {
        if((hpValue - playerAttack) <= 0) {
            setHpValue(0)
        }else {
            setHpValue(hpValue - playerAttack)
        }
    }, [playerAttack])

    useEffect(()=> {
        if(turnCount % 2) {
            setIsTurn('disabled')
        } else {
            setIsTurn('')
            if((hpValue - playerAttack) <= 0) {
                setHpValue(0)
            }else {
                setHpValue(hpValue - playerAttack)
            }
        }
    }, [turnCount])

    const handleAttack = (name, dmgValue) => {
        if(name === 'Böser Verband') {
            if((hpValue - dmgValue) > 100) {
                setHpValue(100)
                enemyAttack(0)
            } else {
                setHpValue(hpValue - dmgValue)
                enemyAttack(0)
            }
        } else if(name !== 'Böser Verband') {
            enemyAttack(dmgValue)
        }
        turnTrack(1)
        
    };

    const attacks = [
        {
            attackId: 1,
            attackName:'Böser Fausthieb',
            attackDamage:15,
        },
        {
            attackId: 2,
            attackName:'Böser Tritt',
            attackDamage:20,
        },
        {
            attackId: 3,
            attackName:'Böser Verband',
            attackDamage:-20,
        },
        {
            attackId: 4,
            attackName:'Böse Kopfnuss',
            attackDamage:35,
        }
    ];

    return (
        <div className="bodyBox">
            <h3>Ich bin der Gegner</h3>
            
            <img src={Enemy1Pic} alt="Villian profile pic" className="profilePic"/>

            <span className="hpbar" style={{width: hpValue + '%' }}>HPBAR</span>
            
            <div className="attackContainer">
                {attacks.map((atk) => (
                        <button
                            key={atk.attackId} 
                            disabled={isTurn}
                            className="button attack" 
                            onClick={() => handleAttack(atk.attackName,atk.attackDamage)} >
                                {atk.attackName} ({atk.attackDamage}) 
                        </button> 
                ))}
            </div>
        </div>
    )
}