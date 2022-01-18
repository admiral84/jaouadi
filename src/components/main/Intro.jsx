import React from 'react'
import './intro.scss'
import { init } from 'ityped'

const Intro = () => {
    const job=document.getElementById("job");
    //const job1=document.getElementById("job1");
    init(job, { showCursor: false, strings: ['Software engineer', 'Web Designer' ] });
    //init(job1, { showCursor: false, strings: ['Web DEveloper' ] });
    return (

        <div className='intro' >
            <div className="left">
                <img src="./assets/man.png" alt="" />
            </div>
           
           </div>
    )
}

export default Intro
