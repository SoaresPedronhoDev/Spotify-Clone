import react from 'react'
import { assets, songsData } from '../assets/assets'


export default function Player(){
    return(
        <>
        <div className='h-[10%] bg-black flex justify-bewtween items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={songsData[0].image} alt='Song Image'></img>
                <div>
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc.slice(0,12)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt='Shuffle Icon'></img>
                    <img className='w-4 cursor-pointer' src={assets.prev_icon} alt='Prev Icon'></img>
                    <img className='w-4 cursor-pointer' src={assets.play_icon} alt='Play Icon'></img>
                    <img className='w-4 cursor-pointer' src={assets.next_icon} alt='Next Icon'></img>
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt='Loop Icon'></img>
                </div>
            </div>          
        </div>
        </>
    )
}