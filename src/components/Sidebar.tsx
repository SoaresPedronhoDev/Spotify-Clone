import React from 'react'
import { assets } from '../../public/images/assets'


export default function Sidebar(){
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-poimter'>
            <img src={'/images/home.png'} alt='Home Icon'></img>
            <p className='font-bold'>Home</p>
        </div>
         <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={'/images/search.png'} alt='Search Icon'></img>
          <p className='font-bold'>Search</p>
         </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center jutify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={'./images/stack.png'}></img>
            <p className='font-semibold'>Your Library</p>
          </div>
        </div>
      </div>
    </div>
  )
}

