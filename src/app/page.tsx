"use client"

import Image from "next/image";
import { motion } from "motion/react"
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
        <motion.div className="flex flex-col h-full p-1 items-baseline gap-3 font-mono"> 
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
        <div className="flex flex-col max-w-200 p-4 gap-4 text-2xl">
          <p className="font-bold">Welcome! My name is Inuka Silva.</p>
          <p>I am currently a student studying engineering at McMaster University. I am interested in Robotics, 
            Space, and Control Systems.
          </p>
          <p>
            Currently looking for summer 2026 co-ops/internships and URA positions :D
          </p>
          <a href="/assets/resume.pdf" rel="noopener noreferrer">
            Resume ↗
          </a>
        </div>
      </div>
    </div>
  );
}


/*USING MOTION

<motion.div className="flex flex-col w-full h-full justify-center" initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}} >
      <div> 
        <Navbar>
          <Socials>
            <a href="https://github.com/InukaSilva"> 
              <Image src="/assets/Github.jpg" width={30} height={30} alt="Github"/>
            </a >
            <a href="https://ca.linkedin.com/in/inuka-silva-a367a8244"> 
            <Image src="/assets/Linkedin.png" width={30} height={30} alt="Linkedin"/>
            </a>
          </Socials>
          <Section>
            <Button>
            <a href="/Gallery">
              Gallery ↗
            </a>
          </Button>
          <Button>
            <a href="https://inukasilva.github.io/Devlog/">
              Devlog ↗
            </a>
          </Button>
          <Button>
            <a href="/Projects">
              Projects ↗
            </a>
          </Button>
          <Button>
            <a href="mailto:Inukasilva@outlook.com">
              Connect ↗
            </a>
          </Button>
          </Section>
        </Navbar>
        <div className="flex items-center justify-center p-10 m-4 mt-=10"> 
          <Image src="/assets/Title.svg" width={900} height={900} alt="Inuka"/>
        </div>
        <div className="flex items-center justify-center flex-row flex-wrap m-3 gap-30">
          <div className="flex flex-col items-start">
            <a className="text-[1.6rem] text-[#4E3D31]">
              Engineering 1 | Co-op @ McMaster University
            </a>
            <a className="text-[1.1rem] text-[#4E3D31]">
              Robotics - Embedded Systems - Space Exploration
            </a>
            
          </div>
          <Button>
              <a href="/assets/resume.pdf" rel="noopener noreferrer">Resume ↗</a>
          </Button>
        </div>
      </div>
      <div className="flex h-full justify-center items-center">
        <div className="border-1 border-amber-900 h-50 w-200 text-center">
          <Scene/>
        </div>
      </div>
    </motion.div>  



*/

/* OG CODE THAT WAS WORKING
      <div className="flex item-center border-1 border-amber-600 z-0">
        <Scene/>
      </div>
*/
/*
      <div className="border-amber-100 z-10"> 
        <Navbar>
          <Socials>
            <a href="https://github.com/InukaSilva"> 
              <Image src="/assets/Github.jpg" width={30} height={30} alt="Github"/>
            </a >
            <a href="https://ca.linkedin.com/in/inuka-silva-a367a8244"> 
            <Image src="/assets/Linkedin.png" width={30} height={30} alt="Linkedin"/>
            </a>
          </Socials>
          <Section>
            <Button>
            <a href="/Gallery">
              Gallery ↗
            </a>
          </Button>
          <Button>
            <a href="https://inukasilva.github.io/Devlog/">
              Devlog ↗
            </a>
          </Button>
          <Button>
            <a href="/Projects">
              Projects ↗
            </a>
          </Button>
          <Button>
            <a href="mailto:Inukasilva@outlook.com">
              Connect ↗
            </a>
          </Button>
          </Section>
        </Navbar>
        <div className="flex items-center justify-center p-10 m-4 mt-=10"> 
          <Image src="/assets/Title.svg" width={900} height={900} alt="Inuka"/>
        </div>
        <div className="flex items-center justify-center flex-row flex-wrap m-3 gap-30">
          <div className="flex flex-col items-start">
            <a className="text-[1.6rem] text-[#4E3D31]">
              Engineering 1 | Co-op @ McMaster University
            </a>
            <a className="text-[1.1rem] text-[#4E3D31]">
              Robotics - Embedded Systems - Space Exploration
            </a>
            
          </div>
          <Button>
              <a href="/assets/resume.pdf" rel="noopener noreferrer">Resume ↗</a>
          </Button>
        </div>
      </div>


*/