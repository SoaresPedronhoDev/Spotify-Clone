import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";


export default function DisplayHome(){
    return(
        <>
        <Navbar/>
        <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Features Charts</h1>
            <div className="flex overflow-auto">
                {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>))}
            </div>
        </div>
        <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Toda's biggest hits</h1>
            <div className="flex overflow-auto">
            {songsData.map((item, index) => (
                <SongItem 
                    key={index} 
                    id={item.id}
                    name={item.name} 
                    desc={item.desc} 
                    image={item.image} 
                />
                ))}
            </div>
        </div>
        </>
    )
}