import { blog_data } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import Blogitem from './blogitem'
import axios from 'axios';

function Bloglist() {
    let[menu,setmenu]=useState("All");
    let[blogs,setblogs]=useState([]);
    async function fetchBlog() {
        
        const res=await axios.get("/api/blogs");
        setblogs(res.data.blogs);
        console.log(res.data.blogs);
    }
    useEffect(()=>{
        fetchBlog()
    },[]);
  return (
    <>
    <div className='flex justify-center gap-4 text-xl'>
        <button onClick={()=>setmenu("All")} className='hover:bg-slate-500 px-5'>All</button>
        <button onClick={()=>setmenu("LifeStyle")} className='hover:bg-slate-500 px-5'>LifeStyle</button>
        <button onClick={()=>setmenu("Technology")} className='hover:bg-slate-500 px-5'>Technology</button>
        <button onClick={()=>setmenu("Travel")} className='hover:bg-slate-500 px-5'>Travel</button>
        <button onClick={()=>setmenu("Business")} className='hover:bg-slate-500 px-5'>Business</button>
        <button onClick={()=>setmenu("Others")} className='hover:bg-slate-500 px-5'>Others</button>
    </div>
    <div className='flex flex-wrap justify-center gap-8 mt-6'>
        {
            blogs.filter((item)=>menu==="All"?true:item.category===menu).map((item,id)=>
                <Blogitem key={id} img={item.image} tittle={item.title} description={item.description} id={item._id} category={item.category}/>
            )

            
        }
    </div>
    </>
  )
}

export default Bloglist