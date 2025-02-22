"use client"
// import axios from "axios";
import React, { useState } from "react";
import  "./page.css";
import {useRouter} from "next/navigation"
import Link from "next/link";
// import dash from "Dashboard/page"
// import Header from "@/Components/Header";

const page=() => {
  
  const router= useRouter();
  function toggleup(){
    document.getElementById("first")?.classList.toggle("active")
  }
  return (

    <>
   
  <div id="main">
    <div className="image">
    <img src="/images/main.webp"/>
    </div>
    <div className="welcome">
      <button onClick={()=>router.push("/Login")} ><p>~Login</p></button><br></br>

    <h1 className="exp">Experience the Future of Online Auctions!</h1>
    <p className="bid">Bid, Win, and Trade with Confidence, Only on BidSphere.</p><br></br>
    {/* <Link href="/Login">start </Link> */}
   <center> <Link href="/Login" className="start">Start Bidding Now</Link></center>
    </div>
  </div>

    <div id="content">
      <div className="info">
          <h1>In Demand Auctions </h1>
        <div className="demand">
          {/* <button >View More</button> */}

          <div className="container" >

            <img src="/images/car1.jpg" />
            <span><b>Date:</b></span> 28-4-2025 <br></br>
            <span><b>Material: </b></span>Carbon Fiber, Aluminum Alloy<br></br>
            <span><b>Location:</b></span> Bihar, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>
            
          </div>

          <div className="container" >

            <img src="/images/car2.jpg" />
            <span><b>Date:</b></span> 8-3-2025 <br></br>
            <span><b>Material: </b></span>Kevlar, High-Strength Steel<br></br>
            <span><b>Location:</b></span> Maharashtra, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>

          </div>

          <div className="container" >
            
            <img src="/images/car3.jpg" />
            <span><b>Date:</b></span> 04-3-2025 <br></br>
            <span><b>Material: </b></span>Titanium, Fiberglass<br></br>
            <span><b>Location:</b></span> Bhopal, India<br></br>
            <center><button className="button " onClick={()=>router.push("/Login")}>More Details</button></center>
            
          </div>

          <div className="container" >

            <img src="/images/car4.jpg" />
            <span><b>Date:</b></span> 19-3-2025 <br></br>
            <span><b>Material: </b></span>Aluminum Alloy, Kevlar<br></br>
            <span><b>Location:</b></span> Hydrabad, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>
            
          </div>

          <div className="container" >

            <img src="/images/car5.jpg" />
            <span><b>Date:</b></span> 12-5-2025 <br></br>
            <span><b>Material: </b></span>High-Strength Steel, Titanium<br></br>
            <span><b>Location:</b></span> J&K, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>
            
          </div>

          <div className="container" >

            <img src="/images/car6.jpg" />
            <span><b>Date:</b></span> 26-2-2025 <br></br>
            <span><b>Material: </b></span>Fiberglass, Magnesium Alloy<br></br>
            <span><b>Location:</b></span> Andhra Pradesh, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>

          </div>

          <div className="container" >
            
            <img src="/images/car7.jpg" />
            <span><b>Date:</b></span> 2-5-2025 <br></br>
            <span><b>Material: </b></span>Polycarbonate, Carbon Fiber<br></br>
            <span><b>Location:</b></span> UP, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>
            
          </div>

          <div className="container" >

            <img src="/images/car3.jpg" />
            <span><b>Date:</b></span> 4-4-2025 <br></br>
            <span><b>Material: </b></span>Kevlar, High-Strength Steel<br></br>
            <span><b>Location:</b></span> Kerela, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>
            
          </div>

          <div className="container" >

            <img src="/images/car5.jpg" />
            <span><b>Date:</b></span> 20-3-2025 <br></br>
            <span><b>Material: </b></span> Aluminum Alloy, Kevlar<br></br>
            <span><b>Location:</b></span> MP, India<br></br>
            <center><button className="button" onClick={toggleup}>More Details</button></center>
            
          </div>

          <div className="container" >

            <img src="/images/car1.jpg" />
            <span><b>Date:</b></span> 18-5-2025 <br></br>
            <span><b>Material: </b></span> High-Strength Steel, Titanium<br></br>
            <span><b>Location:</b></span> Goa, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>

          </div>

          <div className="container" >
            
            <img src="/images/car7.jpg" />
            <span><b>Date:</b></span> 13-3-2025 <br></br>
            <span><b>Material: </b></span>Carbon Fiber, Aluminum Alloy<br></br>
            <span><b>Location:</b></span> Bihar, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>
            
          </div>

          <div className="container" >

            <img src="/images/car2.jpg" />
            <span><b>Date:</b></span> 28-4-2025 <br></br>
            <span><b>Material: </b></span>Polycarbonate, Carbon Fiber<br></br>
            <span><b>Location:</b></span> Gujrat, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>
            
          </div>
          <div className="container" >

            <img src="/images/car3.jpg" />
            <span><b>Date:</b></span> 9-4-2025 <br></br>
            <span><b>Material: </b></span>Titanium, Fiberglass<br></br>
            <span><b>Location:</b></span> Tamil Nadu, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>
            
          </div>

          <div className="container" >

            <img src="/images/car4.jpg" />
            <span><b>Date:</b></span> 5-5-2025 <br></br>
            <span><b>Material: </b></span>Aluminum Alloy, Kevlar<br></br>
            <span><b>Location:</b></span> Punjab, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>

          </div>

          <div className="container" >
            
            <img src="/images/car6.jpg" />
            <span><b>Date:</b></span> 28-4-2025 <br></br>
            <span><b>Material: </b></span>Carbon Fiber, Aluminum Alloy<br></br>
            <span><b>Location:</b></span> Bihar, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>
            
          </div>

          <div className="container" >

            <img src="/images/car8.jpg" />
            <span><b>Date:</b></span> 2-4-2025 <br></br>
            <span><b>Material: </b></span>High-Strength Steel, Titanium<br></br>
            <span><b>Location:</b></span> Arunachhal Pradesh, India<br></br>
            <center><button className="button" onClick={()=>router.push("/Login")}>More Details</button></center>
            
          </div>

          

        </div>

      </div>

      {/* <div id='details'> */}

    {/* 

            <div className='intrest' id="first">
                <center><button className='btn'>&times;</button></center>
            <div className='desc'>
                    <img src='/images/car1.jpg'/>
                <div  className='inform' >
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
         */}
        {/* </div> */}

        </div>

  </>
  )
}

export default page