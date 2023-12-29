"use client"
const Page = () => {
  const title = 'Effect - React JS';

  return(
    <div className="w-full h-screen flex justify-center items-center bg-purple-400">
      <div className="w-full max-w-xl rounded rounded-xl bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2-xl border border-gray-300"> {title} </div>

        <div className="flex justify-center mt-10 mb-10 mx-4 text-2md text-purple-400"> 
          <a href="https://www.github.com/tayserosa" target="_blank"> 
            Developed with 💜 by  Tayse Rosa
          </a> 
        </div>
      </div>
    </div>
  );
}

export default Page;