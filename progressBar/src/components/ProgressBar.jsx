import { useEffect, useState } from "react"

export default function ProgressBar() {

    const [barHeight, setBarHeight] = useState(20);
    //const [xCor, setXCor] = useState(0)
    //const [yCor, setYCor] = useState(0)

    useEffect(() => {

        const handleScroll = () => {
            const scrollY = window.scrollY;
            console.log(scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        
        
    },[])

    return(
        <div className="loadingBar__box" >
            <h3>Ich bin die progressBar</h3>
            <div className="loadingBar">
                <div className='loadingBar__outer' ></div>
                <div className="loadingBar__inner" style={{height: `${barHeight}px`}}></div>
            </div>
        </div>
    )
}