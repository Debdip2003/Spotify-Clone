import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {
    const {id}=useParams()
    const albumData=albumsData[id]
    const {playWithId}=useContext(PlayerContext)
    return (
        <>
        <div>
            <Navbar/>
            <div className='mt-10 gap-8 flex flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt=''/>
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl '>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1'>
                    <img src={assets.spotify_logo} alt='' className='inline-block w-6 mr-4'/>
                    <b className='mr-2'>Spotify</b>
                    1,243,423 Likes,
                    <b className='ml-1 mr-1'>50 songs,</b>
                    about 2hrs 30mins
                </p>
            </div>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date added</p>
            <img src={assets.clock_icon} alt='' className='m-auto w-4'/>
        </div>
        <hr/>
        {songsData.map((item,index)=>
            <div key={index} onClick={()=>playWithId(item.id)} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg[#ffffff2b] cursor-pointer'>
<p className='text-white'>
    <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
    <img src={item.image} alt='' className='inline w-10 mr-5'/>
    {item.name}
</p>
<p className='text-[15xl]'>{albumData.name}</p>
<p className='text-[15px] hidden sm:block'>5 days ago</p>
<p className='text-[15px] text-center'>{item.duration}</p>
            </div>
)}
        </>
    )
}

export default DisplayAlbum
