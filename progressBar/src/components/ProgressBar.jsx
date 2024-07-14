import { useEffect, useState } from "react"

export default function ProgressBar() {

    const [barWidth, setBarWidth] = useState(0)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [barFull, setBarFull] = useState(false)


    useEffect(() => {
        if(!buttonClicked) return
        const interval = setInterval(()=> {
            setBarWidth(prevValue => { 
                    if(prevValue >= 400) {
                        clearInterval(interval)
                        return prevValue
                    }
                    return prevValue + 1;
                }
            );
        }, 37)

        return () => clearInterval(interval)
    }, [buttonClicked])
        
    useEffect(() => {
        if(barWidth === 400) {
            setBarFull(true)
        }
    }, [barWidth])

    const handleStartClick = () => {
        setButtonClicked(!buttonClicked)
    }

    return(
        <div className="progressBar__box">
            <h3>Ich bin die ProgressBr</h3>
            <div className="progressBar">
                <div className={`progressBar__outer ${barFull ? "barFull" : ''} `} ></div>
                <div className="progressBar__inner" style={{width: `${barWidth}px`}}></div>
            </div>
            <button className="progressBar__button" onClick={handleStartClick}>Fill bar</button>
        </div>
    )
}