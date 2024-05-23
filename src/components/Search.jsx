import React from 'react'
import { albumsData, assets, songsData } from '../assets/assets'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const Search = () => {

    const reverseAlbumData=[...albumsData].reverse()
    const reversedSongData=[...songsData].reverse()

    return (

        <>
            <div className='flex justify-start items-center mb-4'>
                <img src={assets.spotify_logo} alt='' className='w-10 mr-4' />
                <p className='text-2xl'>Spotify</p>
            </div>
            <div className='flex justify-center items-center'>
                <input placeholder='Search' type='text' className='border-white border-[0.5px] bg-black w-96 p-6 h-14 rounded-l-full rounded-r-full'></input>
                <FaMagnifyingGlass className='size-8 ml-4'/>
            </div>
            <div className='flex overflow-auto mt-6'>
                {reverseAlbumData.map((item,index)=>{
                  return  <AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>
                })}
            </div>
            <div className='flex overflow-auto mt-2'>
                {reversedSongData .map((item,index)=>{
                  return  <SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>
                })}
            </div>
        </>
    )
}

export default Search
