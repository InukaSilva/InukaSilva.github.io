"use client"

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  return (
    <div className="flex w-screen h-screen flex-row">
      <div className="flex flex-col p-4 w-full">
        <div className="flex flex-start p-4 font-bold">
            <Link href="/">
              ←
            </Link>
        </div>
        <div className="text-center font-semibold p-4 pb-1">
          Things I am currently learnoing or building for 2026.
        </div>
        <div className="text-center p-4 pt-0">
          If you have any resources that may be helpful to my learning, I would appreciate the guidance :D
        </div>
        <div className="flex flex-col border-t justify-center items-center p-5 gap-5 h-screen">
          <div className="flex flex-col items-start flex-start">
          <div>
            [] Learn C and C++
          </div>
          <div>
            [] Learn ROS, ROS 2, and RTOS
          </div>
          <div>
            [] Learn inverse kinematics
          </div>
          <div>
            [] Robotics project (literally anything)
          </div>
        </div>
        <div className="flex justify-center items-end h-full">
            <pre className="font-mono text-xl text-center">
              /\_/\<br></br>
              ( o.o )
            </pre>
        </div>


        </div>
      </div>
    </div>
  );
}
