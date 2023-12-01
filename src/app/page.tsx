import { Square, Circle } from "./components/Geometria";

function Page(){
  return (
    <div>
      <h1 className="font-bold text-2xl text-yellow-500"> Olá mundo! </h1>
      <h2> Olá mundo2! </h2>

      <Square />
      <Circle />
    </div>
  )
}


export default Page;