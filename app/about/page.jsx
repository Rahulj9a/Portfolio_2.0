import LeftSideBar from "@/components/LeftSideBar";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { BsBag } from "react-icons/bs";
 
import Image from "next/image";
import SkillSection from "@/components/aboutComp/skillSection";
 

const page = ({props}) => {
  const links = [
    { title: "Home", logo: <AiOutlineHome size="30px" /> },
    { title: "About Me", href: "./about", logo: <SiAboutdotme size="30px" /> },
    {
      title: "Projects",
      href: "/projects",
      logo: <FaLaptopCode size="30px" />,
    },
    { title: "Contents", logo: <BsBag size="30px" /> },
    { title: "Contact Me", logo: <MdOutlineContactPhone size="30px" /> },
  ];

  return (
    <div className="md:w-auto w-screen h-auto pb-10">
      <LeftSideBar links={links} className="" />

      <div className="m-auto left-0 right-0 bottom-0 top-0 md:left-20  absolute">
        <section id="aboutMeIntro" className="h-screen w-full md:pl-4 pl-1  ">
          <div className=" h-full w-full flex items-center">
            <div className="visual flex w-1/3 items-center justify-center  ">
              <Image
                width={300}
                height={300}
                className="h-[250px] w-[250px] rounded-full shadow-circle-shadow shadow-custom4"
                src="/images/profilepic.jpg"
              />
            </div>
            <div className="words flex items-center w-1/4 h-2/3 border-l-2 border-custom4 px-4">
              <h2 className="text-custom4 text-lg ">
                Hey! I am{" "}
                <span className="block text-2xl font-bold">Rahul Solanki</span>A
                frontend developer
              </h2>
            </div>
            <div className="flex-1 flex items-center h-full">
              <p className="text-custom3 ">
                I am a frontend web developer having a great knowledge of{" "}
                <span className="text-custom4">HTML5</span>,{" "}
                <span className="text-custom4">CSS3</span>,{" "}
                <span className="text-custom4"> Javascript</span>,{" "}
                <span className="text-custom4">Typescript</span> with a passion
                for creating modern and responsive webapps using the latest web
                technologies. I have experience in using frameworks and
                libraries like <span className="text-custom4">Next.js</span> ,{" "}
                <span className="text-custom4">React.js</span>,
                <span className="text-custom4"> TailwindCSS</span>,{" "}
                <span className="text-custom4"> React-Query</span> with
                Bootstrap, MaterialUI, Redux, Zustang, Axios and more... to
                build dynamic and interactive web pages.
                <br />I also have some knowledge of how to use backend
                technologies such as MongoDB,{" "}
                <span className="text-custom4"> PostgreSQL</span>, Express,{" "}
                <span className="text-custom4"> Prisma</span>,{" "}
                <span className="text-custom4"> Next-Auth</span> and more...
                <br /> I am proficient in using{" "}
                <span className="text-custom4"> Git</span> and GitHub for
                version control and collaboration, as well as various tools such
                as VSCode, Canva, <span className="text-custom4"> Figma</span>,
                Notion and AI tools for design, development and productivity.
                <br /> I am always eager to learn new skills and explore news
                challenges in the web development field.
              </p>
            </div>
          </div>
        </section>
        <section id="skillsSection">
        <SkillSection skillName={'HTML'}>This is HTML</SkillSection>
        </section>
         
      </div>

       
    </div>
  );
};

export default page;
