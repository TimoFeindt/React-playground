import Enemy1Pic from './img/Enemy1.jpg';

function Gegner() {
    return (
        <div className="bodyBox">
            <h3>Ich bin der Gegner</h3>
            
            <img src={Enemy1Pic} alt="Villian profile pic" className="profilePic"/>

            {/* Hier kann man einen eigenen Component drauß machen */}
            <span className="hpbar">HPBAR</span>
            <div className="attackContainer">
                Angriffe
                <ul className="attackBox">
                    <li className="attack">Attacke 1</li>
                    <li className="attack">Attacke 2</li>
                    <li className="attack">Attacke 3</li>
                    <li className="attack">Attacke 4</li>
                </ul>
            </div>
        </div>
    )
}
export default Gegner;