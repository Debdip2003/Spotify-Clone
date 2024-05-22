import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef()

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setplayStatus] = useState(false)


    const play=()=>{
        audioRef.current.play()
        setplayStatus(true)
    }

    const pause=()=>{
        audioRef.current.pause()
        setplayStatus(false)
    }

    const playWithId=async(id)=>{
await setTrack(songsData[id])
await audioRef.current.play()
setplayStatus(true)
    }

    const previous=async()=>{
        if(track.id>0){
            await setTrack(songsData[track.id-1])
            await audioRef.current.play()
            setplayStatus(true)
        }
    }
    const next=async()=>{
        if(track.id>songsData.length-1){
            await setTrack(songsData[track.id+1])
            await audioRef.current.play()
            setplayStatus(true)
        }
    }

    const contextValue = {
        audioRef,
        track,
        setTrack,
        playStatus,
        setplayStatus,
        play,
        pause,
        playWithId,
        previous,
        next

    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}


export default PlayerContextProvider