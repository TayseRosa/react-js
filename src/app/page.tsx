"use client"

import { ToDoItem } from "@/types/ToDoItem";
import { useState } from "react";

const Page = () => {

  const [ list, setList ] = useState<ToDoItem[]>([
    {label:'Comprar ovo', checked:true},
    {label:'Comprar cuia', checked:true},
    {label:'Comprar balão', checked:true}
  ]);

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl bg-[#31353d] ">
      <div className="text-white mb-5 text-4xl"> 💜 Arrays in States: View - React JS 💜 </div>

      <ul className="flex flex-col">
        {list.map(item=>(
          <li> {item.label} - <button className="hover:underline"> [Deletar] </button> </li>
        ))}
      </ul>
      
      <div className="w-screen flex flex-row justify-center items-center mt-40 text-3xl text-purple-400"> 
        <a href="https://www.github.com/tayserosa" target="_blank">
          Developed with 💜 by 
          <img src="https://github.com/tayserosa.png" width={40} alt="Tayse CODE Rosa"className="ml-2" /> 
        </a> 
      </div>
    </div>
  );
}

export default Page;