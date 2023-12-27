"use client"

import { photoList } from "@/data/photoList";

const Page = () => {

  return(
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10 "> 💜 Fotos intergalácticas - React JS 💜 </h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map( item => (
          <div> ... </div>
        ) )}
      </section>
      
      <div className="w-screen flex justify-center items-center mt-40 text-2xl text-purple-400"> 
        <a href="https://www.github.com/tayserosa" target="_blank" className="flex" > 
          Developed with 💜 by  Tayse Rosa
        </a> 
      </div>
    </div>
  );
}

export default Page;