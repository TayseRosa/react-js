import { Square, Circle } from "./components/Geometria";
import { Card } from "./components/Card";

function Page(){
  return (
    <div>

      <Card>
        <>
          <h3 className="text-3xl font-bold italic">Frase de efeito!</h3>
          <p className="text-right text-sm">-Autor desconhecido.</p>
          <Circle />
        </>
      </Card>
    </div>

  )
}


export default Page;