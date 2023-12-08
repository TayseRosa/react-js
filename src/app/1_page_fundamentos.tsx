import { peopleList } from "@/data/peopleList";

const Page = () => {

  const chemists = peopleList.filter( person => person.profession === 'chemist' )

  return(
    <div>
      <h1 className="font-bold text-2xl" >Olá mundo</h1>
      <h3>Algum outro texto</h3>

      <h4 className="font-bold text-2xl text-yellow-500">Renderizando listas</h4>
      <ul>
        {peopleList.map(person => 
          <li key={person.id}> {person.name} - { person.profession } </li>
        )}
      </ul>
      
      <hr />

      <h4 className="font-bold text-2xl text-yellow-500">Filtrando listas</h4>
      <ul>
        {chemists.map(person=> 
          <li> {person.name} - { person.profession } </li>
        )}
      </ul>

      <hr />




    </div>
  );
}

export default Page;