import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
  return (
    <div className="ml-[4rem] max-w-md p-6  rounded-lg  border border-gray-600 mr-[1rem]">
      
      <TextGenerateEffect words="Studio Mouche By Ahmed Tlili" />
      <p className="mt-4 text-gray-700">
        Photographe professionnel diplômé en audiovisuel et cinématographie.
      </p>
      <p className="text-gray-600">Adresse : Route de Tunis, Km 1</p>
    </div>
  );
}
