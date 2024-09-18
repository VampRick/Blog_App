import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <>
    <div className='bg-slate-200 flex flex-col gap-4 pt-4'>
    <div className='m-auto relative top-5'>
        <Image src={assets.logo} width={150}/>
    </div>
    <div className='h-[100vh] w-[250px] m-auto'>
    <Link href={"/admin/addproduct"}><div className='flex mt-10 pl-12 py-5  font-semibold border-black border-t-2 border-b-2'>
        <Image src={assets.add_icon} width={30}/>
        <h1 className='text-xl'>Add Blogs</h1>
    </div></Link>
    <Link href={"/admin/bloglist"}><div className='flex mt-10 pl-12 py-5  font-semibold border-black border-t-2 border-b-2'>
        <Image src={assets.blog_icon} width={30}/>
        <h1 className='text-xl'>Blog List</h1>
    </div></Link>
    <Link href={"/admin/subscription"}><div className='flex mt-10 pl-12 py-5  font-semibold border-black border-t-2 border-b-2'>
        <Image src={assets.email_icon} width={30}/>
        <h1 className='text-xl'>Subcriptions</h1>
    </div></Link>
    <Link href='/'><div className='flex mt-10 pl-9 py-5 text-xl font-semibold border-black border-t-2 border-b-2'>Back to Home Page</div></Link>
    </div>
    </div>
    </>
  )
}

export default Sidebar