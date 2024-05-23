import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate=useNavigate()

    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img  src={assets.arrow_left} alt='' className='w-8 p-2 bg-black rounded-2xl cursor-pointer' onClick={()=>navigate(-1)}/>
                    <img src={assets.arrow_right} alt='' className='w-8 p-2 bg-black rounded-2xl  cursor-pointer' onClick={()=>navigate()}/>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer hidden md:block hover:bg-black hover:text-white' onClick={()=>navigate('/signIn')}>Sign In</p>
                    <p className='bg-black text-white hover:bg-white hover:text-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer' onClick={()=>navigate('/login')}>Log In</p>
                    <p className='bg-purple-500 text-black w-7 h-7 flex items-center justify-center rounded-[50%]'>D</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-black text-white px-4 py-1  cursor-pointer rounded-2xl  hover:bg-white hover:text-black'>All</p>
                <p className='bg-black px-4 py-1 text-white rounded-2xl cursor-pointer hover:bg-white hover:text-black'>Music</p>
                <p className='bg-black px-4 py-1  text-white cursor-pointer rounded-2xl hover:bg-white hover:text-black'>Podcast</p>
            </div>
        </>

    )
}

export default Navbar
