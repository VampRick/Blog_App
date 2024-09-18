"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function page() {
    let[list,setList]=useState([]);
    const fetching=async()=>{
        let res=await axios.get("/api/blogs");
        setList(res.data.blogs);
         console.log(res.data.blogs);
    }
    const dateFormat=(d)=>{
        const date=new Date(d);
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; 
        let dd = date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }
    const del=async(mid)=>{
        const data= await axios.delete("/api/blogs",{
            params:{
                id:mid
            }
        }).catch((error)=>console.error(error));
        
        fetching();
        alert("Blog Deleted");
    }
    useEffect(()=>{
        fetching();
    },[]);
  return (
    <>
    <div className='mt-5 ml-5'>
        <h1 className='text-2xl font-bold'>Blog List</h1>
        <table className='border-collapse border border-slate-400 w-4/5 h-full text-center mt-5'>
            <thead>
                <tr>
                    <th className='border border-slate-500'>Author</th>
                    <th className='border border-slate-500'>Blog Title</th>
                    <th className='border border-slate-500'>Date</th>
                    <th className='border border-slate-500'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item,idx)=>
                        <tr key={idx}>
                            <td className='border border-slate-500'>{item.author}</td>
                            <td className='border border-slate-500'>{item.title}</td>
                            <td className='border border-slate-500'>{dateFormat(item.date)}</td>
                            <td className='border border-slate-500'><button className='bg-red-500 rounded-md px-1' onClick={()=>del(item._id)}>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
    </>
  )
}

export default page