"use client"

import { ToDoItem } from "@/types/ToDoItem";
import { useState } from "react";

const Page = () => {

  const [ itemInput, setItemInput ] = useState('')
  const [ list, setList ] = useState<ToDoItem[]>([
    {label:'Comprar ovo', checked:true},
    {label:'Comprar pão', checked:true},
    {label:'Comprar leite', checked:true}
  ]);

  const handleAddButton = () => {
    setList([
      ...list,//cópia do array
      { label: itemInput, checked:false },//add new item
    ]);
    setItemInput('')
  }

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl bg-[#31353d] ">
      <div className="text-white mb-5 text-4xl"> 💜 Arrays in States: View - React JS 💜 </div>

      <h1 className="text-4xl mt-5" >Lista de tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500" >

        <input 
          type="text" 
          placeholder="Add here"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={ e => setItemInput(e.target.value) }
        />

        <button onClick={ handleAddButton } > ➕ </button>

      </div>
      <p className="mb-4 text-yellow-500"> { list.length } itens na lista </p>

      <ul className="flex flex-col">
        {list.map(item=>(
          <li> {item.label} - <button className="hover:underline"> [Deletar] </button> </li>
        ))}
      </ul>
      
      <div className="w-screen flex justify-center items-center mt-40 text-2xl text-purple-400"> 
        <a href="https://www.github.com/tayserosa" target="_blank" className="flex" > 
          Developed with 💜 by  
          <img src="https://github.com/tayserosa.png" width={40} alt="Tayse CODE Rosa" className="pl-3"/>  
        </a> 
      </div>
    </div>
  );
}

export default Page;