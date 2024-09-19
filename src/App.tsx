import React from "react";
import Sidebar from "./components/Sidebar";


export default function App(){
  return(
    <>
    <div className="bg-black h-screen">
      <div className="h-[90%] flex">
        <Sidebar/>
      </div>
    </div>
    </>
  )
}