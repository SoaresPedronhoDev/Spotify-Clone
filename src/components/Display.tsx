import React, { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";


export default function Display(){

    const displayRef = useRef<HTMLDivElement>(null);
    const location = useLocation()
    const isAlbum = location.pathname.includes("album")
    console.log(isAlbum)

    return(
        <>
        <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
            <Routes>
                <Route path="/" element={<DisplayHome/>}/>
                <Route path="/album/:id" element={<DisplayAlbum/>}/>
            </Routes>
        </div>
        </>
    )
}