"use client"

import { CustomButton } from "./components/CustomButton";

const Page = () => {

  const handleButton1 = () => alert('Clicou no botão 1');
  const handleButton2 = () => alert('Clicou no botão 2');
  const handleButton3 = () => alert('Clicou no botão 3');
  
  return(
    <div className="w-screen h-screen flex justify-center items-center">
      <CustomButton label="Clique aqui" onClick={handleButton1} />
      <CustomButton label="Clique aqui" onClick={handleButton2} />
      <CustomButton label="Clique aqui" onClick={handleButton3} />
    </div>
  );
}

export default Page;