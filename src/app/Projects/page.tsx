"use client"

import { motion } from "motion/react"
import Image from "next/image"

export default function Home() {

  return (
    <div className="flex flex-col items-center h-screen text-[#4E3D31] ">
      <div className="flex justify-center h-1/10 w-screen">
        <motion.button whileHover={{ scale: 1.1 }} onHoverStart={() => console.log('hover started!')}>
            <a href="/"> 
              <Image src="/assets/Home.png" width={50} height={50} alt="Github"/>
            </a >
        </motion.button>
      </div>
      
      <h1>So either your not suppose to be here or I haven't implimented this yet. But who could tell?</h1>
    </div>
  );
}