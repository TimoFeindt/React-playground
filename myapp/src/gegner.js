import './HPBAR.css'
import Enemy1Pic from './img/Enemy1.jpg';

function Gegner() {
    return (
        <div className="bodyBox">
            <h3>Ich bin der Gegner</h3>
            
            <img src={Enemy1Pic} alt="Villian profile pic" className="profilePic"/>

            {/* Hier kann man einen eigenen Component drauß machen */}
            <span className="HPBAR">HPBAR</span>
            <div>
                Angriffe
            </div>
        </div>
    )
}
export default Gegner;