import { peopleList } from "@/data/peopleList";

const Page = () => {

  const list = peopleList.map(person => <li> {person.name} </li>)

  return(
    <div>
      <h1 className="font-bold text-2xl" >Olá mundo</h1>
      <h3>Algum outro texto</h3>

      <ul>
        {list}
      </ul>

    </div>
  );
}

export default Page;