"use client"
import React from 'react'
import Link from 'next/link'

const Footer=()=>{
    return(
        <>
        <footer>
        <div className='min-w-auto h-96 bg-slate-900 mt-auto flex text-white'>
            <div className='p-20 w-96 '>
                <h2 className=' text-xl'>Company</h2><br></br>
                <a href='' className='text-lg'>-Home</a><br></br>
                <a href='' className='text-lg'>-In Demand Auctions</a><br></br>
                <a href='' className='text-lg'>-Auction List</a><br></br>
                <a href='' className='text-lg'>-Our Services</a><br></br>
                   
            </div>
            <div className='p-20 w-96'>
                <h2 className=' text-xl'>Useful Links</h2><br></br>
                <a href='' className='text-lg'> -Privacy Policy</a><br></br>
                <a href='' className='text-lg'>-Terms & Conditions</a><br></br>
                <a href='' className='text-lg'>-Refund & Cancellation</a><br></br>
                <a href='' className='text-lg'>-Disclaimer</a><br></br>
                   
            </div>
            <div className='p-20 w-96'>
                <h2 className=' text-xl'>Resoursec</h2><br></br>
                <a href='' className='text-lg'> -About Us</a><br></br>
                <a href='' className='text-lg'>-Contact US</a><br></br>
                <a href='' className='text-lg'>-FAQ</a><br></br>
                {/* <a href='' className='text-lg'>-Disclaimer</a><br></br> */}
                   
            </div>

            <img src='/images/logo1.webp' className=' m-10 '/>


        </div>
        </footer>
        </>
    )
}

export default Footer