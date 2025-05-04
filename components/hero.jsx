import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero(){
  return(
<div  className="ml-[4rem] shadow">
  <div> <h2>Who I am ?</h2></div>
  <TextGenerateEffect

  words="Studio mouche By Ahmed Tlili"
  />
  <p>Photographe professionnel diplomé en audio visuel cinematographie. </p>
  <p>adresse roue tunis km1 </p>
</div>
  );
}