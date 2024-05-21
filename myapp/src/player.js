import './HPBAR.css';
import HeroPic from './img/Hero.jpg';

function Player() {
    return (
        <div className="bodyBox">
            <h3>Ich bin der Spieler</h3>
            <img src={HeroPic} alt="" className="profilePic" />
        
            {/* Hier kann man einen eigenen Component drauß machen */}
            <span className="HPBAR">HPBAR</span>
            <div>
                Verschiedene Angriffe
            </div>
        </div>
    )
}

export default Player;