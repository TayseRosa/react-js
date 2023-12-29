"use client"

import { useEffect, useState } from "react";

const Page = () => {

  const [name, setName] = useState('Tayse Rosa')

  useEffect( ()=>{
    console.log('RODOU O EFFECT...')
  },[name] );

  const handleChangeButton = () => {
    setName('Maria Tayse')
  }

  const handleChangeButton2 = () => {
    setName('Code Maria')
  }


  return(
    <div className="w-full h-screen flex justify-center items-center bg-purple-400">
      <p>My name is {name}</p>

      <button onClick={handleChangeButton} className="py-4 px-5 rounded-md bg-slate-600" >Mudar para Maria Tayse</button>
      <button onClick={handleChangeButton2} className="py-4 px-5 rounded-md bg-slate-600" >Mudar para Code Maria</button>
    </div>
  );
}

export default Page;