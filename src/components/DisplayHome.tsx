import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";


export default function DisplayHome(){
    return(
        <>
        <Navbar/>
        <div className="my-5 font-bold text-2x1">
            {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image}/>))}
        </div>
        </>
    )
}