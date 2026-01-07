import React from "react";
import { assets, songsData } from "../assets/assets";

const Player = () => {
  return (
    <div className="h-[15%] bg-black text-white px-4 flex items-center justify-between">

      {/* LEFT SECTION – SONG INFO */}
      <div className="hidden lg:flex items-center gap-4">
        <img
          className="w-14 h-14 object-cover rounded"
          src={songsData[0].image}
          alt={songsData[0].name}
        />

        <div>
          <p className="font-semibold">{songsData[0].name}</p>
          <p className="text-sm text-gray-400">
            {songsData[0].desc.slice(0, 18) + " ..."}
          </p>
        </div>
      </div>

      {/* CENTER SECTION – CONTROLS */}
      <div className="flex flex-col items-center gap-2">

        {/* CONTROL ICONS */}
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>

        {/* PROGRESS BAR */}
        <div className="flex items-center gap-4">
          <p className="text-xs">0:15</p>

          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <div className="h-1 w-1/3 bg-green-800 rounded-full"></div>
          </div>

          <p className="text-xs">4:20</p>
        </div>
      </div>

      {/* RIGHT SECTION – EXTRA CONTROLS */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.play_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />

        <div className="w-20 h-1 bg-slate-50 rounded"></div>

        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>

    </div>
  );
};

export default Player;
