import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import PlayerContextProvider from "./context/PlayerContext";


export default function App(){


  return(
    <PlayerContextProvider>
    <div className="bg-black h-screen">
      <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
    </div>
    </PlayerContextProvider>
  )
}