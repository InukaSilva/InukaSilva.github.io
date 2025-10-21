import Image from "next/image";
import {motion } from "motion/react"
import Background from "three/src/renderers/common/Background.js";

interface CardProps {
  image: string;
  name: string;
  language: string;
  description: string;
}

export default function Card({ image, language, name, description }: CardProps) {
  return (
    <motion.div whileHover={{ scale : 0.9 }} className="rounded-2xl">
      <div className="flex flex-row align-baseline items-center p-1 border rounded-2xl w-100">
        <div className="flex flex-col justify-baseline p-4">
          <p>
            {name}
          </p>
          <p className="text-xs font-semibold">
            {language}
          </p>
          <p className="text-xs">
            {description}
          </p>
        </div>
      </div>
    </motion.div>

  );
}


/*
      <div className="rounded-2xl overflow-hidden object-fill">
        <Image src={image} alt={name} width={150} height={150} className="text-xs"/>
      </div>
      */