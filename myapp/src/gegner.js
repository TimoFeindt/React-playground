import Enemy1Pic from './img/Enemy1.jpg';
import { useState } from 'react';

export default function Gegner({ enemyAttack, playerAttack, enemyTurn}) {

    /* const handleplayerAttack = () => {
        if((hpValue - playerAttack) > 100) {
            setHpValue(100)
        } else {
            setHpValue(hpValue - playerAttack)
        }
    } */

    console.log('Player')
    console.log('enemyAttack: ' + enemyAttack)
    console.log('playerAttack: ' + playerAttack)
    console.log('enemyTurn: ' + enemyTurn)
    console.log('--------')

    

    const [hpValue, setHpValue] = useState(100);

    if(!enemyTurn) {
        if((hpValue - playerAttack) <= 0) {
             setHpValue(0)
         }else {
             setHpValue(hpValue - playerAttack)
             enemyTurn(false)
         }
     }

    const handleAttack = (name, dmgValue) => {
        if(name === 'Verband') {
            if((hpValue - dmgValue) > 100) {
                setHpValue(100)
            } else {
                setHpValue(hpValue - dmgValue)
            }
        } else if(name !== 'Böser Verband') {
            enemyAttack(dmgValue)
            enemyTurn(false)
        }
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

            <span className="hpbar">HPBAR</span>
            
            <div className="attackContainer">
                {attacks.map((atk) => (
                        <button 
                            key={atk.attackId} 
                            className="button attack" 
                            onClick={() => handleAttack(atk.attackName,atk.attackDamage)} >
                                {atk.attackName} ({atk.attackDamage}) 
                        </button> 
                ))}
            </div>
        </div>
    )
}