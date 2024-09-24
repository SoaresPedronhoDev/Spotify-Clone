import React from "react";


export default function AlbumItem({ image, name, desc }: { image: string, name: string, desc: string }){
    return(
        <>
        <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img className='rounded' src={image} alt=""></img>
            <p className="font-bold mt-2 mb-2">{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
        </>
    )
}