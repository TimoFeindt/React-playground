import HeroPic from './img/Hero.jpg';
import { useState } from 'react';

export default function Player({ enemyAttack, playerAttack}) {

    

    //console.log('Test' + enemyAttack)

    /* const handleEnemyAttack = () => {
        if((hpValue - enemyAttack) > 100) {
            setHpValue(100)
        } else {
            setHpValue(hpValue - enemyAttack)
        }
    } */

    

    const [hpValue, setHpValue] = useState(100);

    const handleAttack = (name, dmgValue) => {
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
                            onClick={() => handleAttack(atk.attackName,atk.attackDamage)} >
                                {atk.attackName} ({atk.attackDamage}) 
                        </button> 
                ))}
            </div>
        </div>
    )
};