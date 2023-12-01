import { peopleList } from "@/data/peopleList";

const Page = () => {

  return(
    <div>
      <h1 className="font-bold text-2xl" >Olá mundo</h1>
      <h3>Algum outro texto</h3>

      <ul>
        {peopleList.map(person => 
          <li> {person.name} </li>
        )}
      </ul>
    </div>
  );
}

export default Page;