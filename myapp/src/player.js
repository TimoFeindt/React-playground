import HeroPic from './img/Hero.jpg';
import { useState } from 'react';

export default function Player({ enemyAttack, playerAttack, playersTurn}) {

    console.log('Player')
    console.log('enemyAttack: ' + enemyAttack)
    console.log('playerAttack: ' + playerAttack)
    console.log('playerTurn: ' + playersTurn)
    console.log('--------')

    const [hpValue, setHpValue] = useState(80);
    
// event triggern, wenn der gegner seinen zug gemacht hat. Dafür die playerturn value beobachten? 
// alternative ist es gibt eine funktion mit der man observen kann, ob sich der State vom enemyAttack rerendert wurde 
    
        if(!playersTurn) {
           if((hpValue - enemyAttack) <= 0) {
                setHpValue(0)
            }else {
                setHpValue(hpValue - enemyAttack)
                playersTurn(false)
            }
        }

    const handleAttackClick = (name, dmgValue) => {
        if(name === 'Verband') {
            if((hpValue - dmgValue) > 100) {
                setHpValue(100)
            } else {
                setHpValue(hpValue - dmgValue)
            }
        } else if(name !== 'Verband') {
            playerAttack(dmgValue)

        }
    };

    const attacks = [
        {
            attackId: 1,
            attackName:'Fausthieb',
            attackDamage:15,
        },
        {
            attackId: 2,
            attackName:'Tritt',
            attackDamage:20,
        },
        {
            attackId: 3,
            attackName:'Verband',
            attackDamage:-20,
        },
        {
            attackId: 4,
            attackName:'Kopfnuss',
            attackDamage:35,
        }
    ];

    return (
        <div className="bodyBox">
            <h3>Ich bin der Spieler</h3>
            <img src={HeroPic} alt="" className="profilePic" />
        
            <span className="hpbar" style={{width: hpValue + '%' }}>HPBAR</span>

            <div className="attackContainer">
                {attacks.map((atk) => (
                        <button 
                            key={atk.attackId} 
                            className="button attack" 
                            onClick={() => handleAttackClick(atk.attackName,atk.attackDamage)} >
                                {atk.attackName} ({atk.attackDamage}) 
                        </button> 
                ))}
            </div>
        </div>
    )
};