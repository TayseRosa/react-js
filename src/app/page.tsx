"use client"

import { useState } from "react";

//import { CustomButton } from "./components/CustomButton";

const Page = () => {
  const [ count, setCount ] = useState<number>(10);

  const handleClickButton = () => {
    setCount(count +1)
  }
  
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button onClick={handleClickButton} className="bg-blue-500 p-3" > +1  </button>
    </div>
  );
}

export default Page;