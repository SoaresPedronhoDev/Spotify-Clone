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
                <div className=' flex items-center gap-5'>
                    <p>1:23</p>
                    <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                    </div>
                    <p>3:20</p>
                </div>
            </div>   
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-4' src={assets.plays_icon} alt='Play Icon'></img>
                <img className='w-4' src={assets.mic_icon} alt='Mic Icon'></img>
                <img className='w-4' src={assets.queue_icon} alt='Queue Icon'></img>
                <img className='w-4' src={assets.speaker_icon} alt='Speaker Icon'></img>
                <img className='w-4' src={assets.volume_icon} alt='Volume Icon'></img>
                <div className='w-20 bg-slate-50 h-1 rounded'></div>
                <img className='w-4' src={assets.mini_player_icon} alt='Mini Player Icon'></img>
                <img className='w-4' src={assets.zoom_icon} alt='Zoom Icon'></img>
            </div>       
        </div>
        </>
    )
}