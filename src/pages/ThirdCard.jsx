import React from 'react'
import { GoBookmarkFill } from "react-icons/go";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom'

const ThirdCard = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#E7E5ED] gap-5 shadow-2xl'>

       {/* Routes of other card pages */}
       <NavLink to='/second' className='mr-8'>
        <button className='px-4 py-1 rounded-md bg-[#DA2778] text-white active:scale-95 cursor-pointer text-lg font-semibold'>Prev</button>
      </NavLink>
      <div className='w-[280px] h-auto rounded-t-2xl rounded-br-2xl rounded-bl-md bg-[#FFFFFF] border-6 border-[#DA2778]'>
       <img className='m-auto' src="src/assets/pizza.png" alt="" />

       <div className='flex items-center justify-between px-8 mb-2'>
        <h1 className='font-bold flex gap-1 items-center'><span><GoBookmarkFill color='#17BB84'/></span>Pizza</h1>
        <div>
          <p className='text-gray-400 text-sm font-semibold'>Total Bill</p>
          <h1 className='font-bold'>RM 6.00</h1>
        </div>
       </div>

       <div className='flex'>
        <div className="left w-2/4 bg-[#DA2778] rounded-tr-lg border-none py-2">
        <h1 className='text-white font-semibold text-center mb-2'>Split With</h1>
        <div className='flex items-center justify-center'>
         <Stack  direction="row" spacing={1.5}>
         <Avatar sx={{ width: 28, height: 28 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
         <Avatar sx={{ width: 28, height: 28 }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
         <Avatar sx={{ width: 28, height: 28 }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Stack>
        </div>
        </div>
        <div className="right w-2/4 flex items-center justify-center">
         <button className='px-6 py-2 rounded-md bg-[#4D92F7] text-white font-bold text-xs cursor-pointer'><p>SPLIT</p> 
         <p>NOW</p></button>
        </div>
       </div>
      </div>

      <div className='w-[280px] h-auto rounded-t-2xl rounded-br-2xl rounded-bl-md bg-[#FFFFFF] border-6 border-[#2563EA]'>
       <img className='m-auto py-6' src="src/assets/ice.png" alt="" />

       <div className='flex items-center justify-between px-8 mb-2'>
        <h1 className='font-bold flex gap-1 items-center'><span><GoBookmarkFill color='#17BB84'/></span>Ice Cream</h1>
        <div>
          <p className='text-gray-400 text-sm font-semibold'>Total Bill</p>
          <h1 className='font-bold'>RM 2.00</h1>
        </div>
       </div>

       <div className='flex'>
        <div className="left w-2/4 bg-[#2563EA] rounded-tr-lg border-none py-2">
        <h1 className='text-white font-semibold text-center mb-2'>Split With</h1>
        <div className='flex items-center justify-center'>
         <Stack  direction="row" spacing={1.5}>
         <Avatar sx={{ width: 28, height: 28 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
         <Avatar sx={{ width: 28, height: 28 }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
         <Avatar sx={{ width: 28, height: 28 }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Stack>
        </div>
        </div>
        <div className="right w-2/4 flex items-center justify-center">
         <button className='px-6 py-2 rounded-md bg-[#EF58A5] text-white font-bold text-xs cursor-pointer'><p>SPLIT</p> 
         <p>NOW</p></button>
        </div>
       </div>
      </div>

         {/* Routes of other card pages */}
         <NavLink to='/' className='ml-8'>
          <button className='px-4 py-1 rounded-md bg-[#2563EA] text-white active:scale-95 cursor-pointer text-lg font-semibold'>Next</button>
        </NavLink>
    </div>
  )
}

export default ThirdCard
