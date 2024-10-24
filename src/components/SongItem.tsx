import  { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default function SongItem({
  name,
  image,
  desc,
  id,
}: {
  name: string;
  image: string;
  desc: string;
  id: number;
}) {

  const { playWithId } = useContext(PlayerContext);


  return (
    <div
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
      onClick={() => {
        console.log("Clicked song ID:", id);
        playWithId(id);
      }}
    >
      <img className="rounded" src={image} alt={name} />
      <h3 className="font-bold mt-2 mb-1">{name}</h3>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
}