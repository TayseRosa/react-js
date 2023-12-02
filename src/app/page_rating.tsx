import { EmojiRating } from "./components/EmojiRating";

const Page = () => {
  
  return(
    <div className="w-screen h-screen flex justify-center items-center flex-col text-white
    bg-gradient-to-r from-sky-500 to-indigo-500">
      <EmojiRating rate={1} />

      <img src="https://source.unsplash.com/random/200x200" className="mt-5" />
    </div>

  );
}

export default Page;