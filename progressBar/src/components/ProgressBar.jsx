import { useEffect, useState } from "react"

export default function ProgressBar() {

    const [barHeight, setBarHeight] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;

            const scrollPosition = (scrollY / (documentHeight - windowHeight))*100 ;
            setBarHeight(scrollPosition)

        }
        window.addEventListener('scroll', handleScroll)        
    },[])

    return(
        <div className="loadingBar__box" >
            <h3>Ich bin die progressBar</h3>
            <div className="loadingBar">
                <div className="loadingBar__inner" style={{height: `${barHeight}%`}}></div>
            </div>
        </div>
    )
}