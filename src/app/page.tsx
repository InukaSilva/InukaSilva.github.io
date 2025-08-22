import Image from "next/image";
import Button from "./components/button";
import Navbar from "./components/navbar";
import Icon from "./components/icon";
import Section from "./components/links";
import Card from "./components/project_card";


export default function Home() {

  return (
    <div> 
      <Navbar>
        <Icon>
          <a href="https://github.com/InukaSilva"> 
            <Image src="/assets/Github.jpg" width={30} height={30} alt="Github"/>
          </a >
          <a href="https://ca.linkedin.com/in/inuka-silva-a367a8244"> 
          <Image src="/assets/Linkedin.png" width={30} height={30} alt="Linkedin"/>
          </a>
        </Icon>
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
      <div className="flex items-center justify-center flex-row flex-wrap m-4 gap-40">
        <div className="flex flex-col items-start">
          <a className="text-[1.6rem] text-[#4E3D31]">
            Engineering @ McMaster University
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
    
  );
}
