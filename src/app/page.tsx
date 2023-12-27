"use client"

import { questions } from "@/data/questions";

const Page = () => {

  const title = 'Quiz de culinária'

  return(
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow-black">
        
        <div className="p-5 font-bold text-2-xl border border-gray-300"> {title} </div>

        <div className="p-5"> ... </div>

        <div className="p-5 text-center border-t border-gray-300"> x de {questions.length} pergunta{questions.length === 1 ? '' : 's' } </div>

        <div className="flex justify-center mt-10 mx-4 text-2xl text-purple-400"> 
          <a href="https://www.github.com/tayserosa" target="_blank"> 
            Developed with 💜 by  Tayse Rosa
          </a> 
        </div>
      </div>
    </div>
  );
}

export default Page;