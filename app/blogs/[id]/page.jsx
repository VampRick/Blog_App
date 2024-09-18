"use client"
import { assets } from '@/assets/assets';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Page({params}) {
    let [data,setData]=useState({});
   
    const fetchblogdata=async()=>{
       const res=await axios.get("/api/blogs",{
        params:{
            id:params.id
        }
       }) 
       setData(res.data);
    }
    useEffect(()=>{
        fetchblogdata();
    },[])
    
  return (
    <>
     <div className='py-5 px-5 md:px-12 lg:px-28'>
      
        <div className='flex justify-between items-center'>
            <Image
            src={assets.logo}
            width={130}
            />
            <Link href="/admin"><button className='flex justify-center items-center gap-2 font-semibold border border-2 border-black rounded-lg p-2 shadow-[-7px_7px_0px_#000000]'>Get Started <Image
            src={assets.arrow}/></button></Link>
        </div>
        <div className='flex flex-col justify-center items-center mt-20 gap-3'>
          <p className='text-3xl font-bold'>{data.title}</p>
          <p className='text-2xl font-semibold'>{data.author}</p>
          <div><Image
          src={data.image}
          width={800}
          height={100}/></div>
          <h1 className='ml-[-660px] font-bold text-2xl underline underline-offset-3'>Information</h1>
          <p className='text-xl font-semibold max-w-[800px]'>{data.description}</p>
        </div>
        {/* <button>Back to home page</button> */}

     </div>
   
    </>
  )
}

export default Page