// "use client"
import React from 'react'
import "./dash.css"

const dash=()=>{

    // const toggleup=()=>{
    //     document.getElementById("details").classList.toggle("active")
    // }

    return(
        <>
        <div id='details'>
            <div className='intrest'>
                <center><button className='btn'>&times;</button></center>
            <div className='desc'>
                    <img src='/images/car1.jpg'/>
                <div className='inform'>
                    <h1>Ferarri</h1>
                        <p>Brand: Ferrari S.p.A.</p>
                        <p>Founded: 1939 (officially as Auto Avio Costruzioni), 1947 as Ferrari</p>

                        <p>Headquarters: Maranello, Italy</p>
                        <p>Founder: Enzo Ferrari</p>
                    <p>
                    Ferrari is one of the most iconic luxury sports car manufacturers in the world, known for its high-performance vehicles, elegant design, and racing legacy. The brand is synonymous with speed, innovation, and exclusivity, making it a top choice for car enthusiasts and collectors.
                    </p>

                   <center> <button>Interested</button></center>
                </div>
            </div>
                   </div>
        </div>
        
        
        </>
    )
}

export default dash