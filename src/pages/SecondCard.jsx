import React from 'react'
import { NavLink } from 'react-router-dom'

const SecondCard = () => {
  return (
      <div className='w-full h-screen flex items-center justify-center bg-[#E7E5ED] gap-5 shadow-2xl'>
        {/* Routes of other card pages */}
      <NavLink to='/' className='mr-8'>
        <button className='px-4 py-1 rounded-md bg-[#6366F1] text-white active:scale-95 cursor-pointer text-lg font-semibold'>Prev</button>
      </NavLink>
        <div className='w-[300px] h-auto rounded-xl bg-[#fff]'>
          <img className='rounded-t-xl h-[200px] w-full' src="https://letscultivategreatness.com/wp-content/uploads/2022/01/Hero-Teacher-in-front-of-class-300x225.jpeg" alt="" />

          <div className='py-6 px-5 space-y-3'>
            <h1 className='text-xl font-bold'>Unlocking the Secrets of Productivity</h1>
            <p>Boost efficiency, accomplish more. Learn proven strategies, become a better coder.</p>
            <div className='flex items-center justify-between mt-6'>
              <button className='font-semibold text-[#828C9B] cursor-pointer'>Cancel</button>
              <button className='px-4 py-1 bg-[#EEF2FF] text-[#6366F1] rounded-md font-semibold cursor-pointer'>Preview</button>
              <button className='px-4 py-1 bg-[#6366F1] text-white rounded-md font-semibold cursor-pointer'>Buy Now</button>
            </div>
          </div>
        </div>

        <div className='w-[300px] h-auto rounded-xl bg-[#fff]'>
          <img className='rounded-t-xl h-[200px] w-full' src="https://avatars.githubusercontent.com/u/62973615?v=4" alt="" />

          <div className='py-6 px-5 space-y-3'>
            <h1 className='text-xl font-bold'>The Unlimited JavaScript Course</h1>
            <p>The JavaScript course for everyone! Master JavaScript with projects, challenges and theory.
            </p>
            <div className='flex items-center justify-between mt-6'>
              <button className='font-semibold text-[#828C9B] cursor-pointer'>Cancel</button>
              <button className='px-4 py-1 bg-[#EEF2FF] text-[#6366F1] rounded-md font-semibold cursor-pointer'>Preview</button>
              <button className='px-4 py-1 bg-[#6366F1] text-white rounded-md font-semibold cursor-pointer'>Buy Now</button>
            </div>
          </div>
        </div>

        <div className='w-[300px] h-auto rounded-xl bg-[#fff]'>
          <img className='rounded-t-xl h-[200px] w-full' src="https://reynolds.edu/programs/program-images/science-technology-engineering-and-mathematics/ist-computer-programmer-csc_why.jpg" alt="" />

          <div className='py-6 px-5 space-y-3'>
            <h1 className='text-xl font-bold'>Mastering Python Course</h1>
            <p>Unlock the power of Python, From basics to advanced techniques, become a coding maestro with our comprehensive course.</p>
            <div className='flex items-center justify-between mt-6'>
              <button className='font-semibold text-[#828C9B] cursor-pointer'>Cancel</button>
              <button className='px-4 py-1 bg-[#EEF2FF] text-[#6366F1] rounded-md font-semibold cursor-pointer'>Preview</button>
              <button className='px-4 py-1 bg-[#6366F1] text-white rounded-md font-semibold cursor-pointer'>Buy Now</button>
            </div>
          </div>
        </div>
        {/* Routes of other card pages */}
      <NavLink to='/third' className='ml-8'>
        <button className='px-4 py-1 rounded-md bg-[#6366F1] text-white active:scale-95 cursor-pointer text-lg font-semibold'>Next</button>
      </NavLink>
      </div>
  )
}

export default SecondCard
