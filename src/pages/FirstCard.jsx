import React from 'react'
import { NavLink } from 'react-router-dom'

const FirstCard = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#E7E5ED] shadow-2xl gap-6'>
       {/* Routes of other card pages */}
            <NavLink to='/third' className='mr-8'>
              <button className='px-4 py-1 rounded-md bg-[#9DF5E3] active:scale-95 cursor-pointer text-lg font-semibold'>Prev</button>
            </NavLink>
      <div className='w-[300px] h-auto rounded-xl bg-[#fff]'>
       <img  className='rounded-t-xl' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUiW7e9EydBQ2W_Dcrr2dam-N7RGgS56kFrrSJ9_asmUf541bt" alt="" />
      <div className=' py-6 px-5 space-y-3'>
         <h1 className='mt-4'><span className='bg-[#9DF5E3] text-lg font-semibold px-3 rounded-2xl'>New</span> <span className='text-md font-semibold text-gray-500'>3 BEDS • 2 BATHS</span></h1>
         <h1 className='text-2xl font-semibold'>Beautiful Home in the...</h1>
         <p className='text-lg'>$1900.00 / <span className='text-md text-gray-500'>wk</span></p>
         <p className='text-lg'>⭐⭐⭐⭐⭐ <span className=' font-semibold'>34 reviews</span></p>
       </div>
       
      </div>

      <div className='w-[300px] h-auto rounded-xl bg-[#fff]'>
       <img  className='rounded-t-xl' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUiW7e9EydBQ2W_Dcrr2dam-N7RGgS56kFrrSJ9_asmUf541bt" alt="" />
      <div className=' py-6 px-5 space-y-3'>
         <h1 className='mt-4'><span className='bg-[#9DF5E3] text-lg font-semibold px-3 rounded-2xl'>New</span> <span className='text-md font-semibold text-gray-500'>3 BEDS • 2 BATHS</span></h1>
         <h1 className='text-2xl font-semibold'>Beautiful Home in the...</h1>
         <p className='text-lg'>$1900.00 / <span className='text-md text-gray-500'>wk</span></p>
         <p className='text-lg'>⭐⭐⭐⭐⭐ <span className=' font-semibold'>34 reviews</span></p>
       </div>
       
      </div>
      {/* Routes of other card pages */}
      <NavLink to='/second' className='ml-8'>
        <button className='px-4 py-1 rounded-md bg-[#9DF5E3] active:scale-95 cursor-pointer text-lg font-semibold'>Next</button>
      </NavLink>
    </div>
  )
}

export default FirstCard
