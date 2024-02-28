import React from 'react';
import Image from 'next/image'

const NotFound = () => {
  return (
    <>
       <div className='h-screen  flex items-center '>
       <div className='flex w-full'>
            <Image src="/404page.jpg" width={500} height={500} className='mx-auto w-[50%]'/>
        </div>
       </div>
    </>
  )
}

export default NotFound