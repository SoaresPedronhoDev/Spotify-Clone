import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";


export default function App(){
  return(
    <>
    <div className="bg-black h-screen">
      <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
    </div>
    </>
  )
}