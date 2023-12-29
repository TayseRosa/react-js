"use client"

import { useEffect, useState } from "react";
import { VideoPlayer } from "./components/VideoPlayer";

const Page = () => {

  const [playing, setPlaying] = useState(false)

  return(
    <div className="w-full h-screen flex justify-center items-center flex-col bg-purple-400">
      <div>
        <p className="text-2xl text-blue-800 mb-4"> {playing ? 'Rodando' : 'Pausado'} </p>
        <button className="border border-white bg-cyan-800 p-4 mb-4 rounded-md" onClick={()=>setPlaying(!playing)} >Play / Pause</button>
      </div>

      <VideoPlayer 
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />

    </div>
  );
}

export default Page;