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
        <div className="flex flex-col h-screen justify-center items-center text-center">
          <p className="font-semibold">
            Still working on this section :L
          </p>
          <p>
            Please check again when I stop procrastinating on this.
          </p>
        </div>
      </div>
    </div>
  );
}
