import React from 'react'
import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

const Intro = () => {
    const textRef=useRef();
    useEffect(() => {
        
        init(textRef.current, { showCursor: false, strings: ['Software engineer', 'Web Developer', 'UX Designer' ] })    
           
        
    }, [])
    
    return (

        <div className='intr' >
            <div className="wrapper">
            <div className="left">
                <img src="./assets/man.png" alt="" />
            </div>
            <div className="right">
                <p id="p1">
                <span id="salutation">Hi there, I am</span><span id="nom"> Nasreddine Jaouadi </span>
                
                </p>
                <p id="p2">
                    <span ref={textRef}></span>
                </p>
                
            </div>
            </div>
            
           
           </div>
    )
}

export default Intro
