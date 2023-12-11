"use client"

import { useState } from "react";
import { Person2 } from "@/types/Person2";

const Page = () => {
  
  const [ fullName, setFullName ] = useState<Person2>({name:'', lastName:''})

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
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
      
      <div className="w-screen flex flex-row justify-center items-center mt-40 text-2xl text-purple-400"> Developed with 💜 by <a href="https://www.github.com/tayserosa" target="_blank"> <img src="https://github.com/tayserosa.png" width={40} alt="Tayse CODE Rosa"className="ml-2" /> </a> </div>
    </div>
  );
}

export default Page;