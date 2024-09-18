import { assets } from '@/assets/assets'
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

function Header() {
  let[mail,setMail]=useState("");
  async function upd() {
    let formData=new FormData();
    formData.append("mail",mail);
    const data=await axios.post("/api/email",formData);
    if(data.data.success){
      alert("Subscribed");
    }
  }
  const notload=(e)=>{
    e.preventDefault();
    setMail("");

  }
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
        <div>
            <div className='text-center my-10'>
            <h1 className='text-3xl font-semibold'>Latest Blogs</h1>
            <p className='text-xl max-w-[800px] mt-5 m-auto'>Hello, Welcome to our Blog App called <span className='font-bold text-3xl'>blogger</span>. Here you can see all types of latest blogs on every tpics such as Lifestyle, Travel, Technology etc. </p>
            <form onSubmit={notload} className='mt-6 ml-80 flex items-center justify-evenly shadow-[-7px_7px_0px_#000000] border border-2 border-black rounded max-w-[400px]'>
                <input className='p-2 outline-none'
                type='email'
                onChange={(e)=>setMail(e.target.value)}
                value={mail}
                placeholder='enter your mail id'/>
                <button className='font-bold' type='submit' onClick={upd}>submit</button>
                

            </form>
            </div>
        </div>

    </div>
    </>
  )
}

export default Header
