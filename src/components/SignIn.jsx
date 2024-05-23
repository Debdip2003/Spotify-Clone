import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate=useNavigate()
    return (
        <>
        <div className='flex justify-start items-center mb-4'>
            <img src={assets.spotify_logo} alt='' className='w-10 mr-4'/>
            <p className='text-2xl'>Spotify</p>
        </div>
        <div className='flex justify-center items-center'>
        <div className='flex justify-center items-start flex-col gap-2 '>

            <h1 className='text-3xl font-bold mb-4'>Sign up to start listening!</h1>
            <div className='flex flex-col gap-4'>
            <p>Email address</p>
            <input type='email' className='w-96 h-14 p-2 bg-black border-white border-[0.5px] rounded' placeholder='name@domain.com'></input>
            <p className='text-sm text-green-600 underline underline-offset-4 cursor-pointer hover:text-white' onClick={()=>navigate('/phonenumber')}>Use phone number instead</p>
           <button className='bg-green-600 h-14 text-xl text-black font-bold rounded-l-full rounded-r-full mb-6 mt-4 hover:bg-green-700'>Next</button>
            <hr className='mb-4'/>
           <button className='text-white bg-black w-96 h-14 rounded-r-full rounded-l-full border-[0.1px] border-slate-500 font-bold text-xl hover:bg-white hover:text-black'>Sign in with Google</button>
           <button className='text-white bg-black w-96 h-14 rounded-r-full rounded-l-full border-[0.1px] border-slate-500 font-bold text-xl hover:bg-white hover:text-black'>Sign in with Facebook</button>
           <button className='text-white bg-black w-96 h-14 rounded-r-full rounded-l-full border-[0.1px] border-slate-500 font-bold text-xl hover:bg-white hover:text-black'>Sign in with Apple</button>
            
            <p className='flex justify-center items-center  pb-6'>Already have an account? <span className='ml-2 text-green-600 underline underline-offset-4  cursor-pointer hover:text-white'>Login</span></p>
            
            
            </div>
        </div>
        </div>
        </>
    )
}

export default SignIn
