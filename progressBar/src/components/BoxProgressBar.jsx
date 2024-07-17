import { useEffect, useState } from "react"

export default function BoxProgressBar(){

    const [barHeight, setBarHeight] = useState(0)

    useEffect(() => {
        const scrollBox =  document.querySelector('.PB__box')
        const handleScroll = () => {
            const boxHeight = document.querySelector('.PB__box').offsetHeight;
            const mouseScroll = document.querySelector('.PB__box').scrollTop;
            const scrollHeight = document.querySelector('.PB__box').scrollHeight;
            const scrollPercantage = Math.floor(mouseScroll / ( scrollHeight -  boxHeight) * 100 )    

            console.log('mouseScroll', mouseScroll)
            console.log('boxHeight', boxHeight)
            console.log('scrollHeight', scrollHeight)

            console.log('scrollHeight - boxHeight', boxHeight - scrollHeight)

            setBarHeight(scrollPercantage)
        }
        scrollBox.addEventListener("wheel", handleScroll)
    },[])

    return( 
        <div className="PB__container">
            
            <div className="PB__outer">
                <span className="PB__inner" style={{ height: `${barHeight}%`}}></span>
            </div>
            
            <div className="PB__box">
                <div className="PB__content PB__left">
                    <h4>Test</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="PB__content PB__right">
                    <h4>Test</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                
                <div className="PB__content PB__left">
                    <h4>Test</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="PB__content PB__right">
                    <h4>Test</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                
                <div className="PB__content PB__left">
                    <h4>Test</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="PB__content PB__right">
                    <h4>Test</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                
                <div className="PB__content PB__left">
                    <h4>Test</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            
        </div>
    )
} 