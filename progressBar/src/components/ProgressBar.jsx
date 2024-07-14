import { useState } from "react"

export default function ProgressBar() {

    const [barHeight, setBarHeight] = useState(10)

    const handleBarHeight = () => {
        setBarHeight(barHeight + 1);
    }

    return(
        <>
            <h3>Ich bin die ProgressBr</h3>
            <div className="progressBar">
                <div className="progressBar__outer"></div>
                <div className="progressBar__inner" style={{height: `${barHeight}px`}}></div>
            </div>
            <button onClick={handleBarHeight}>Increase Height</button>
        </>
    )
}