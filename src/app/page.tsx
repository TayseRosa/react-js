"use client"

import { ToDoItem } from "@/types/ToDoItem";
import { useState } from "react";

const Page = () => {

  const [ itemInput, setItemInput ] = useState('')
  const [ list, setList ] = useState<ToDoItem[]>([
    {label:'Comprar ovo', checked:true},
    {label:'Comprar pão', checked:false},
    {label:'Comprar leite', checked:false}
  ]);

  const handleAddButton = () => {
    //Verifica se nao esta vazio
    if(itemInput.trim() === '' ) return;

    setList([
      ...list,//cópia do array
      { label: itemInput, checked:false },//add new item
    ]);
    setItemInput('')
  }

  const toggleItem = (index:number) => {
    let newList = [...list]

    //alert('Teste' + index) 
    for(let i in list){
      if( index === parseInt(i) ){
        newList[i].checked = !newList[i].checked
      }
    }
    setList(newList)
    
    

  }

  const deleteItem = (index:number) => {
    //alert('Deletando item: ' + index)
    //Quando o key fofr diferente do index, retorna false e neste caso "DELETA"
    const newList = list.filter( (item, key) => key !== index )
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
        {list.map((item, index)=>(
          <li key={index}> 
          <input 
            type="checkbox" 
            onClick={ ()=>toggleItem(index) }
            checked={item.checked}
            className="w-6 h-6 mr-3"
          ></input>
            {item.label} - <button onClick={() => deleteItem(index)} className="hover:underline"> [Deletar] </button> </li>
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