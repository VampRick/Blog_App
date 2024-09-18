import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
function Page() {
  return (
    <>
    <div className='p-10 font-semibold text-2xl'>
      Hello, welcome to the admin pannel of our Blog App <span className='font-bold text-3xl'>blogger</span>. Don't only be a viewer, also be a 
      Blogger. Post your blogs through the admin pannel and be a professional blogger. You can also subscribe 
      with your mail id. Share your latest ideas with us and help our app to grow up publicly. <span className='font-bold'>Thankyou....</span>
       <div className='flex items-center justify-center mt-10'><Image src={assets.logo} width={200}/></div>
    </div>
    </>
  )
}

export default Page