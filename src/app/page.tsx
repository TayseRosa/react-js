"use client"

import { useState } from "react";

const Page = () => {
  
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input 
        type="text"
        placeholder="Name"
        className="border border-black p-3 text-2xl text-black rouded-md mb-3"
      />

      <input 
        type="text"
        placeholder="Last name"
        className="border border-black p-3 text-2xl text-black rouded-md mb-3"
      />

      <p>My full name is:</p>
      <p>...</p>
      
      <div className="w-screen flex flex-row justify-center items-center mt-40 text-2xl text-purple-400"> Developed with 💜 by <a href="https://www.github.com/tayserosa" target="_blank"> <img src="https://github.com/tayserosa.png" width={40} alt="Tayse CODE Rosa"className="ml-2" /> </a> </div>
    </div>
  );
}

export default Page;