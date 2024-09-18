"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function page() {
    const d = new Date();
    let[mail,setMail]=useState([]);
    const fetching=async()=> {
        let res=await axios.get("/api/email");
        setMail(res.data.data);
        console.log(res.data.data) ;       
    }
    async function del(id) {
        const deem=await axios.delete("/api/email",{
            params:{
                ok:id
            }
        })
        fetching();
        alert("Email deleted")
        
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
    useEffect(()=>{
        fetching();
    },[])
  return (
   
    <>
    <div className='mt-5 ml-5'>
        <h1 className='text-2xl font-bold'>All Subscriptions</h1>
        <table className='border-collapse border border-slate-500 w-3/4 h-full mt-5 text-center'>
            <thead>
                <tr>
                    <th className='border border-slate-500'>Email id</th>
                    <th className='border border-slate-500'>Date</th>
                    <th className='border border-slate-500'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    mail.map((item,idx)=>
                        <tr key={idx}>
                            <td className='border border-slate-500'>{item.email}</td>
                            <td className='border border-slate-500'>{dateFormat(item.date)}</td>
                            <td className='border border-slate-500'><button className='bg-red-500 rounded-md px-4 py-1' onClick={()=>del(item._id)}>Delete</button></td>
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