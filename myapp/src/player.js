import HeroPic from './img/Hero.jpg';
import { useState, useEffect } from 'react';

export default function Player({ enemyAttack, playerAttack, turnCount, turnTrack }) {

    const [hpValue, setHpValue] = useState(80);
    const [isTurn, setIsTurn] = useState('');

// event triggern, wenn der gegner seinen zug gemacht hat. Dafür die playerturn value beobachten? 
// alternative ist es gibt eine funktion mit der man observen kann, ob sich der State vom enemyAttack rerendert wurde 
    /* const testTurn = () => {
        if(!playersTurn) {
           if((hpValue - enemyAttack) <= 0) {
                setHpValue(0)
            }else {
                setHpValue(hpValue - enemyAttack)
                //playersTurn(false)
            }
        }
    }
    testTurn(); */

    

    useEffect(()=> {
        if((hpValue - enemyAttack) <= 0) {
            setHpValue(0)
        }else {
            setHpValue(hpValue - enemyAttack)
        }
    }, [enemyAttack])


    useEffect(()=> {
        if(turnCount % 2) {
            setIsTurn('')
        } else {
            setIsTurn('disabled')
        }
        
    }, [turnCount])


    const handleAttackClick = (name, dmgValue) => {
        if(name === 'Verband') {
            if((hpValue - dmgValue) > 100) {
                setHpValue(100)
                playerAttack(0)
            } else {
                setHpValue(hpValue - dmgValue)
                playerAttack(0)
            }
        } else if(name !== 'Verband') {
            playerAttack(dmgValue)
        }
        turnTrack(1)
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
                            disabled={isTurn}
                            className="button attack"
                            onClick={() => handleAttackClick(atk.attackName,atk.attackDamage)} >
                                {atk.attackName} ({atk.attackDamage}) 
                        </button> 
                ))}
            </div>
        </div>
    )
};