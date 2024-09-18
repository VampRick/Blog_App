"use client";
import { assets } from '@/assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function page() {
    let[image,setImage]=useState(false);
    let[title,settitle]=useState("");
    let[desc,setdesc]=useState("");
    let[name,setname]=useState("");
    let[cate,setcate]=useState("LifeStyle");
    // let[aI,setaI]=useState("");
    async function sub() {
        let formData=new FormData();
        formData.append("title",title);
        formData.append("description",desc);
        formData.append("author",name);
        formData.append("category",cate);
        formData.append("image",image);
        // formData.append("aI",aI);
        let data=await axios.post("/api/blogs",formData);
        if(data.data.success==true){
            alert("Blog added");
         }
        else{
            alert("Error");
        }
    }
    const notload=(e)=>{
        e.preventDefault();
        setImage(false);
        settitle("");
        setdesc("");
        setname("");
        setcate("LifeStyle");
    }
  return (
    <>
    <form className='p-5' onSubmit={notload}>
        <h1>Upload Thumbnail</h1>
        <label htmlFor='img'>
        <Image src={image==false?assets.upload_area:URL.createObjectURL(image)} width={150} height={50}/>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='img' name='image' hidden required/>
       <div className='flex flex-col mt-5 gap-2'>
       <label className='font-semibold'>Enter Title</label>
       <input className='border boeder-1 border-black w-1/2' value={title} onChange={(e)=>settitle(e.target.value)} type='text' placeholder='title please' name='title'/>
       </div>
       <div className='flex flex-col mt-5 gap-2'>
       <label className='font-semibold'>Enter Description</label>
       <textarea className='border boeder-1 border-black w-1/2' value={desc} onChange={(e)=>setdesc(e.target.value)} type='text' placeholder='Description please' name='description'/>
       </div>
       <div className='flex flex-col mt-5 gap-2'>
       <label className='font-semibold'>Enter Author Name</label>
       <input className='border boeder-1 border-black w-1/2'  value={name} onChange={(e)=>setname(e.target.value)} type='text' placeholder='name please' name='author'/>
       </div>
       <div className='flex flex-col mt-5 gap-2 '>
        <p className='font-semibold'>Category</p>
        <select className='w-1/4 border border-black border-1' name='category'  value={cate} onChange={(e)=>setcate(e.target.value)}>
            <option value="LifeStyle">LifeStyle</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Business">Business</option>
            <option value="Others">Others(Mention your category in Title for others)</option>
        </select>
       </div>
       <button className='mt-7 bg-black text-white px-7 py-2 rounded-md 'type='submit' onClick={sub}>Submit</button>
       {/* <div className='flex flex-col mt-5 gap-2'>
       <label className='font-semibold'>Enter Author img</label>
       <input className='border boeder-1 border-black w-1/2'  value={aI} onChange={(e)=>setaI(e.target.value)} type='text' placeholder='name please' name='aI'/>
       </div> */}
    </form>
    </>
  )
}

export default page