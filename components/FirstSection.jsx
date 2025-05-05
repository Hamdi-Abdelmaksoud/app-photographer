import { FlipWords } from "./ui/Flip-Word";

export default function FirstSection() {
  const words = [
    'Mariage',
    'shootings',
    'Portraits',
    'Cinéma',
    'Montage vidéos',
    'spot publicitaire'
  ];

  return (
    <div className="flex items-center justify-center h-[95vh] mb-12 bg-fixed bg-center bg-cover img-cover">
      <div className="absolute top-0 left-0 right-0 h-[95vh] bg-black/70 z-[1]" />

      <div className="text-white z-[2] ml-[3rem] mt-[-10rem]">
        {/* Rectangle transparent contenant FlipWords */}
        <div className="min-w-[280px] h-[50px] bg-transparent flex items-center justify-center ">
          <FlipWords words={words} className="text-2xl font-bold text-center" />
        </div>
      </div>
    </div>
  );
}
