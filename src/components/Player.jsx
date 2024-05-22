import React, { useContext } from 'react'
import { assets} from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    const { track,playStatus, play, pause ,previous,next} = useContext(PlayerContext)

    return (
        <div className='h-[10%] bg-[#121212] rounded w-full flex justify-between items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-10 rounded' src={track.image} alt='' />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
                <div className='flex flex-col items-center gap--1 m-auto'>
                    <div className='flex gap-4'>
                        <img src={assets.shuffle_icon} alt='' className='w-4 ml-8' />
                        <img src={assets.prev_icon} alt='' className='w-4' onClick={previous}/>
                        {playStatus ?
                            <img onClick={pause} src={assets.pause_icon} alt='' className='w-4' /> :
                            <img onClick={play} src={assets.play_icon} alt='' className='w-4' />
                        }

                        <img src={assets.next_icon} alt='' className='w-4' onClick={next}/>
                        <img src={assets.loop_icon} alt='' className='w-4' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Player
