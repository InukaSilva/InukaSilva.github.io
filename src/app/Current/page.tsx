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
        <div className="font-semibold p-4 pb-1">
          Things I am currently trying to learn or build for 2026.
        </div>
        <div className="p-4 pt-0">
          If you have any resources that may be helpful to my learning, I would appreciate the guidance :D
        </div>
        <div className="flex flex-col border-t  items-start w-full p-5 gap-5">
          <div className="flex">
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
        <div className="flex flex-grow justify-center items-end h-screen jus">
            <pre className="font-mono text-xl text-center">
              /\_/\<br></br>
              ( o.o )
            </pre>
        </div>


      </div>
    </div>
  );
}
