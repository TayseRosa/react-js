"use client"

import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";
import { Modal } from "./components/Modal";

const Page = () => {

  const [ showModal, setShowModal ] = useState(false);
  const [ imageOfModal, setImageOfModal ] = useState('');

  const openModal = ( id:number ) => {
    //alert('Mostrar id:' +id)
    
    const photo = photoList.find(item=>item.id === id)
    if(photo){
      setImageOfModal(photo.url)
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return(
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10 "> 💜 Fotos intergalácticas - React JS 💜 </h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map( item => (
          <PhotoItem 
            key={item.id}
            photo={item}
            onClick={ ()=>openModal(item.id) }//Abrir modal
          />
        ) )}
      </section>

          
      {showModal &&
      //Modal
      <Modal
        image={imageOfModal}
        closeModal={closeModal}
      />
      }
      
      <div className="flex justify-center mt-10 mx-4 text-2xl text-purple-400 bg-yellow-400"> 
        <a href="https://www.github.com/tayserosa" target="_blank"> 
          Developed with 💜 by  Tayse Rosa
        </a> 
      </div>
    </div>
  );
}

export default Page;