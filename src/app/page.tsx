"use client"

import { useState } from "react";
import { Person2 } from "@/types/Person2";

const Page = () => {
  
  const [ fullName, setFullName ] = useState<Person2>({name:'', lastName:''})

  const limparNome = () => {
    setFullName({ ...fullName, name:'' })
  }

  const limparSobrenome = () => {
    setFullName({ ...fullName, lastName:'' })
  }

  const limparCompleto = () => {
    setFullName({ name:'', lastName:'' })
  }

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl bg-[#31353d] ">
      <div className="text-purple-400 mb-5 text-4xl"> 💜 Atualizando Objeto em States 💜 </div>
        <div className="flex flex-col">
          <input 
            type="text"
            placeholder="Name"
            className="border border-black p-3 text-2xl text-black rouded-md mb-3"
            value={fullName.name}
            onChange={ e=> setFullName({ ...fullName, name: e.target.value })}
          />

          <input 
            type="text"
            placeholder="Last name"
            className="border border-black p-3 text-2xl text-black rouded-md mb-3"
            value={fullName.lastName}
            onChange={ e=> setFullName({ ...fullName, lastName: e.target.value })}
          />

          <p>My full name is:</p>
          <p> {fullName.name}  {fullName.lastName} </p>

      
        <button onClick={limparNome} className="bg-red-500 p-4 rounded-xl mt-3" > Clear name </button>
        <button onClick={limparSobrenome} className="bg-blue-500 p-4 rounded-xl mt-3" > Clear last name </button>
        <button onClick={limparCompleto} className="bg-green-500 p-4 rounded-xl mt-3" > Clear full name </button>
      </div>
      
      <div className="w-screen flex flex-row justify-center items-center mt-40 text-2xl text-purple-400"> Developed with 💜 by <a href="https://www.github.com/tayserosa" target="_blank"> <img src="https://github.com/tayserosa.png" width={40} alt="Tayse CODE Rosa"className="ml-2" /> </a> </div>
    </div>
  );
}

export default Page;