"use client"

import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {

  const images = [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
    "/photos/photo3.jpg",
    "/photos/photo4.jpg",
  ];

  return (
    <div className="flex flex-col items-center h-screen text-[#4E3D31] ">
      <div className="flex justify-center h-1/10 w-screen">
        <motion.button whileHover={{ scale: 1.1 }} onHoverStart={() => console.log('hover started!')}>
            <a href="/"> 
              <Image src="/assets/Home.png" width={50} height={50} alt="Github"/>
            </a >
        </motion.button>
      </div>
      <div className="flex flex-row flex-wrap w-8/10 p-1 gap-0.5 border-2">
        {images.map((src, index) => (
          <div key={index} className="relative h-40 w-40 overflow-hidden">
            <Image
              src={src}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <h1>So either your not suppose to be here or I haven't implimented this yet. But who could tell?</h1>
    </div>
  );
}

    