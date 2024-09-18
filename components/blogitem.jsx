import { assets, blog_data } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blogitem({tittle,img,description,category,id}) {
  return (
    <>
    <div className='text-center max-w-[330px] bg-white border border-2 hover:shadow-[-7px_7px_0px_#000000]'>
        <div className='h-[200px] overflow-hidden'><Image
        src={img}
        width={300}
        height={200}
        /></div>
        <h2 className='font-semibold'>{category}</h2>
        <h1 className='font-bold underline underline-offset-5'>{tittle}</h1>
        <p className='h-11 max-w-[300px] overflow-hidden'>{description}</p>
        <Link href={`/blogs/${id}`}><button className='flex items-center justify-center gap-2 ml-24 font-bold'>Read more <Image src={assets.arrow}/></button></Link>

    </div>
    
    
    </>
  )
}

export default Blogitem