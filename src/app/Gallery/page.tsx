"use client"

import { assert } from "console";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {

  return (
      <div className="flex w-screen h-screen flex-row">
      {/*THis is the side bar */}
      <div className="flex border-r flex-col min-w-75 h-full p-4">

        <motion.div className="flex h-20 flex-row flex-wrap gap-2 justify-center items-center p-2">
          <a href="https://github.com/InukaSilva"> 
            <Image src="/assets/Github.jpg" width={30} height={30} alt="Github"/>
          </a >
          <a href="https://ca.linkedin.com/in/inuka-silva-a367a8244"> 
            <Image src="/assets/Linkedin.png" width={30} height={30} alt="Linkedin"/>
          </a>
          <a href="https://www.youtube.com/@Inuka_Silva"> 
            <Image src="/assets/Youtube.png" width={35} height={35} alt="Youtube"/>
          </a>
          
        </motion.div>
        <motion.div className="flex flex-col h-full p-1 items-baseline gap-3"> 
          <p className="pt-5 font-bold">
            Contant Info
          </p>
          <div className="flex flex-col items-baseline pl-4 gap-3">
            <motion.button>
              <a href="mailto:Inukasilva@outlook.com">
                Inukasilva@outlook.com ↗
              </a>
            </motion.button>
            <motion.button>
              <a href="https://github.com/InukaSilva">
                GitHub: InukaSilva ↗
              </a>
            </motion.button>
            <motion.button>
              <a href="https://ca.linkedin.com/in/inuka-silva-a367a8244">
                LinkedIn: Inuka Silva ↗
              </a>
            </motion.button>
             <motion.button>
              <a href="https://inuka-silva.itch.io/">
                Itch.io: Inuka Silva ↗
              </a>
            </motion.button>
          </div>
          <p className="pt-5  font-bold">
              Resources
          </p>
          <div className="flex flex-col items-baseline pl-4 gap-3">
            <motion.button>
              <a href="/assets/resume.pdf" rel="noopener noreferrer">
                Resume ↗
              </a>
            </motion.button>
             <motion.button>
            <a href="/Projects">
              Projects ↗
            </a>
          </motion.button>
          <motion.button>
            <a href="https://inukasilva.github.io/Devlog/">
              Devlog ↗
            </a>
          </motion.button>
          <motion.button>
            <a href="/Gallery">
              Gallery ↗
            </a>
          </motion.button>
          </div>
          <p className="pt-5  font-bold">
              Quick Links
          </p>
          <div className="flex flex-col items-baseline pl-4 gap-3">
             <Link href="/">Home ↗</Link>
          </div>

         
        </motion.div>
      </div >
      {/* This is the main section*/}
      <div className="flex w-full h-full justify-center items-center">

        <div className="flex flex-col max-w-400 m-auto justify-center items-center border">
          <p>
            This is still a work in progress Projects
          </p>
          <div className="flex flex-row max-w-400 p-4 items-center border">
            <Image src={"/assets/photos/photo1.jpg"}  loading="lazy" width={300} height={300} alt="Photo 1"/>
            <div className="flex flex-col p-4">
              <p>
                Camera:
              </p>
              <p>
                Apature
              </p>
              <p>
                Shutter Speed
              </p>
              <p>
                ISO
              </p>
            </div>
          </div>
          <div className="flex flex-row max-w-400 p-4 items-center border">
            <Image src={"/assets/photos/photo2.jpg"}  loading="lazy" width={300} height={300} alt="Photo 1"/>
            <div className="flex flex-col p-4">
              <p>
                Camera:
              </p>
              <p>
                Apature
              </p>
              <p>
                Shutter Speed
              </p>
              <p>
                ISO
              </p>
            </div>
          </div>
                    <div className="flex flex-row max-w-400 p-4 items-center border">
            <Image src={"/assets/photos/photo4.jpg"}  loading="lazy" width={300} height={300} alt="Photo 1"/>
            <div className="flex flex-col p-4">
              <p>
                Camera:
              </p>
              <p>
                Apature
              </p>
              <p>
                Shutter Speed
              </p>
              <p>
                ISO
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

/**
 * 
 * 
 *         <div className="flex flex-col max-w-200 justify-center p-4 gap-4 text-2xl border">
          <Image src="assets/photos/photo1.jpg" alt="Photo 1" width={0} height={0} layout="responsive" className="scale-0.5"></Image>
          <p>
            This is still a work in progress Projects
          </p>
          <p className="font-mono">
            This is still a work in progress Projects
          </p>
        </div>
 */