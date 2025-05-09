'use client';
import Image from "next/image";
import { useState } from "react";

const images = [
  "/slide/photo1.jpeg",
  "/slide/photo2.jpeg",
  "/slide/photo3.jpeg",
  "/slide/photo4.jpeg",
];

export default function Slide() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
     <div>
{images.map((image,index)=>{
return <Image src={image} key={index} width={500} height={500}/>
})}
  </div>
  );
}
