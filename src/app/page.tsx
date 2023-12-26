"use client"

import { ToDoItem } from "@/types/ToDoItem";
import { useState } from "react";

const Page = () => {

  const [ itemInput, setItemInput ] = useState('')
  const [ list, setList ] = useState<ToDoItem[]>([
    {id:1, label:'Comprar ovo', checked:true},
    {id:2, label:'Comprar pão', checked:false},
    {id:3, label:'Comprar leite', checked:false}
  ]);

  const handleAddButton = () => {
    //Verifica se nao esta vazio
    if(itemInput.trim() === '' ) return;

    setList([
      ...list,//cópia do array
      { id:list.length + 1,label: itemInput, checked:false },//add new item
    ]);
    setItemInput('')
  }

  const toggleItem = (id:number) => {
    let newList = [...list]

    //alert('Teste' + index) 
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].checked = !newList[i].checked
      }
    }
     
    setList(newList)
  }

  const deleteItem = (id:number) => {
    //alert('Deletando item: ' + index)
    //Quando o key for diferente do index, retorna false e neste caso "DELETA"
    const newList = list.filter( item => item.id !== id )
    setList(newList);
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
          <li key={item.id}> 
          <input 
            type="checkbox" 
            onClick={ ()=>toggleItem(item.id) }
            checked={item.checked}
            className="w-6 h-6 mr-3"
          ></input>
            {item.label} - <button onClick={() => deleteItem(item.id)} className="hover:underline"> [Deletar] </button> </li>
        ))}
      </ul>
      
      <div className="w-screen flex justify-center items-center mt-40 text-2xl text-purple-400"> 
        <a href="https://www.github.com/tayserosa" target="_blank" className="flex" > 
          Developed with 💜 by  Tayse Rosa
        </a> 
      </div>
    </div>
  );
}

export default Page;