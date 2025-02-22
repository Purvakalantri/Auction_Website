"use client"
import React from 'react'
import Link from 'next/link'


const Header=(props)=>{
    return(
        <>


        <div className='text-blue-800 h-24 bg-blue-50 flex text-center justify-between relative  px-5'>
            <img src='/images/logo1.webp' className='w-16 h-16  m-4 '/>
            {/* <div className='inline-block'> */}
                <p className='text-lg font-serif mt-2'>Welcome to</p>
            <h1 className='font-mono font-bold text-4xl mt-5' >BidSphere</h1>
            <p className='text-lg  font-serif mt-10'>Where every bid tells a story, and every win is a victory!</p>
            {/* </div> */}
            <div className='flex gap-5 font-semibold text-lg m-8'>
            
            {/* <h2>{props.user}</h2> */}

                {/* by using a tag still reloding is happening thus we use Link  tag*/}
                {/* <a href='/About'>About</a>
                <a href='/Blog'>Career</a>
                <a href='/Blog'>Blog</a> */}
                {/* <a href=''>Blog</a> */}
                {/* <a href=''>Contact</a> */}
                {/* use only capital 'l' Link not link both are different */}
                <Link href="/Home">Home</Link>
                <Link href="/About">About</Link>
                {/* <Link href="/Blog">Blog</Link> */}
                <Link href="/Register">Register</Link>
                <Link href="/Login">Login</Link>
                
                


            </div>
        </div>



        
        </>
    )

}
export default Header