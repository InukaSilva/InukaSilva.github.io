"use client"

import {motion } from "motion/react"
import Link from "next/link";
import Image from "next/image"
import Card from "../components/card";


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
      <div className="w-full h-full items-center p-4">            
        <div className="flex flex-row flex-wrap items-center justify-center max-w-400 gap-1">
              <a href="https://github.com/InukaSilva/Spotify_Gesture_Control">
                <Card language="Python" name="Spotifty Gesture Controller ↗" description="Provides media functions controlls via hand gestures"/>
              </a>
              <a href="https://github.com/InukaSilva/PID-Visualizer">
                <Card language="JavaScript" name="PID Visualizer ↗" description="Graph visualizer showing the effects of a PID controller"/>
              </a>
               <Card language="Java" name="Cryo" description="FRC 1305's robot for the 2024 season"/>
              <a href="/assets/vector.pdf" rel="noopener noreferrer">
                <Card language="Java" name="Vector ↗" description="FRC 1305's robot for the 2023 season"/>
              </a>
              <Card language="Java" name="Yeti" description="FRC 1305's robot for the 2022 season"/>
        </div>      
      </div>
    </div>
  );
}