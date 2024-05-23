import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const LogIn = () => {

   const [password, setPassword] = useState(true)
   const handleClick = () => {
      setPassword(!password)
   }

   return (
      <>
         <div className='flex justify-start items-center mb-4'>
            <img src={assets.spotify_logo} alt='' className='w-10 mr-4' />
            <p className='text-2xl'>Spotify</p>
         </div>
         <div className='flex justify-center items-center flex-col gap-4'>
            <button className='text-white bg-black w-96 h-14 rounded-r-full rounded-l-full border-[0.1px] border-slate-500 font-bold text-xl hover:bg-white hover:text-black'>Log in with Google</button>
            <button className='text-white bg-black w-96 h-14 rounded-r-full rounded-l-full border-[0.1px] border-slate-500 font-bold text-xl hover:bg-white hover:text-black'>Log in with Facebook</button>
            <button className='text-white bg-black w-96 h-14 rounded-r-full rounded-l-full border-[0.1px] border-slate-500 font-bold text-xl hover:bg-white hover:text-black'>Log in with Apple</button>
            <hr />
            <div>
               <p className='mb-4'>Email address</p>
               <input type='email' className='w-96 h-14 p-2 bg-black border-white border-[0.5px] rounded' placeholder='name@domain.com'></input>
            </div>
            <div>
               <div className='flex'>
                  <p className='mb-4 mr-4'>Password</p>
                  {
                     password ? <FaEye onClick={handleClick} className='size-6'/> : <FaEyeSlash onClick={handleClick} className='size-6'/>
                  }
               </div>
               <input type={password ? "password" : "text"} className='w-96 h-14 p-2 bg-black border-white border-[0.5px] rounded'></input>
            </div>
            <button className='bg-green-600 h-14 w-40 text-xl text-black font-bold rounded-l-full rounded-r-full mb-6 mt-4 hover:bg-green-700'>Log In</button>
            <p className='underline underline-offset-4 -mt-4 cursor-pointer hover:text-green-600'>Forgot your password!</p>

         </div>
      </>
   )
}

export default LogIn
