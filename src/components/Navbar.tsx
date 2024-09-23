import React from "react";
import { assets } from "../assets/assets";


export default function Navbar(){
    return(
        <>
        <div className="w-full flex justify-between items-center font-semibold">
            <div className=" flex items-center gap-2">
                <img className="w-8 bg-black p-2 rounded-2x1 cursor-pointer" src={assets.arrow_left} alt="Arrow Left Icon"></img>
                <img className="w-8 bg-black p-2 rounded-2x1 cursor-pointer" src={assets.arrow_right} alt="Arrow Right Icon"></img>
            </div>
        </div>
        </>
    )
}