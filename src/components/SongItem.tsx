import React from "react";

export default function SongItem({
  name,
  image,
  desc,
}: {
  name: string;
  image: string;
  desc: string;
}) {
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className='rounded' src={image} alt={name} />
      <h3 className="font-bold mt-2 mb-1">{name}</h3>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
}
