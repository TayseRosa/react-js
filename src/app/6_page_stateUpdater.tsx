"use client"

import { useState } from "react";

const Page = () => {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 2)
    setCount( c => c + 2 )
    setCount( c => c + 2 )
  }
  
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      
      <p> {count} </p>
      <button onClick={handleClick} className="bg-blue-200 text-white p-3 rounded-md"> +2 </button>


      <div className="w-screen flex flex-row justify-center items-center mt-40 text-2xl text-purple-400"> Developed with 💜 by <a href="https://www.github.com/tayserosa" target="_blank"> <img src="https://github.com/tayserosa.png" width={40} alt="Tayse CODE Rosa"className="ml-2" /> </a> </div>
    </div>
  );
}

export default Page;