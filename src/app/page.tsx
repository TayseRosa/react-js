"use client"

import { useState } from "react";

//import { CustomButton } from "./components/CustomButton";

const Page = () => {
  const [showSecret, setShowSecret] = useState(false)

  const handleClickButton = () => {
    setShowSecret(!showSecret);
  }
  
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <button onClick={handleClickButton} className="bg-blue-500 p-3" > {showSecret ? 'Ocultar área secreta' : 'Mostrar área secreta'} </button>
      {showSecret &&
        <div className="p-3 bg-purple-600 rounded-md mt-3"> Área secreta </div>
      }


      <div className="w-screen flex flex-row justify-center items-center mt-40 text-2xl text-purple-400"> Developed with 💜 by <a href="https://www.github.com/tayserosa" target="_blank"> <img src="https://github.com/tayserosa.png" width={40} alt="Tayse CODE Rosa"className="ml-2" /> </a> </div>
    </div>
  );
}

export default Page;