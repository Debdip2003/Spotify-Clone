import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const PhoneNumber = () => {

    const navigate=useNavigate()

    const [inputValue,setInputValue]=useState('')

    const handleInputChange=(event)=>{
        setInputValue(event.target.value)
    }

    const isPhoneNumberValid=inputValue.length===10

    return (
        <>
        <div className='flex '>
            <img src={assets.spotify_logo} alt='' className='w-10 mr-4'/>
            <p className='text-2xl'>Spotify</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-6'>
            <p className='text-sm font-bold'>Enter phone number</p>
            <div className='flex '>
            <input type='number' className='mr-4 w-20  h-10 rounded bg-black border-[0.5px] bprder-white p-2' placeholder='+91'></input>
            <input type='number'  className='mr-4 w-96 h-10 rounded bg-black border-[0.5px] bprder-white p-2' placeholder='Enter your phone number' onChange={handleInputChange}></input>
            </div>
            {!isPhoneNumberValid && inputValue && (
        <p className='text-red-600 text-sm -mt-4 -ml-24'>Phone number must be 10 digits</p>
      )}
            <button className='bg-green-600 w-20 h-10 rounded-l-full rounded-r-full' disabled={!isPhoneNumberValid} onClick={()=>navigate('/')}>Next</button>
  
        </div>
        </>
    )
}

export default PhoneNumber
