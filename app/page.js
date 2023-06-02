
import LeftSideBar from "@/components/LeftSideBar";
import { AiOutlineHome } from "react-icons/ai"
import { SiAboutdotme, SiBootstrap, SiCss3, SiExpress, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiPrisma, SiReact, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si'
import { FaLaptopCode } from 'react-icons/fa'
import { MdOutlineContactPhone } from 'react-icons/md'
import { BsBag } from "react-icons/bs"
import Circle from "@/components/structure/divAsBorder";
import Footer from "@/components/Header";
import Link from "next/link";




const HomePage = () => {


      const links = [{ title: "Home", logo: <AiOutlineHome size='30px' /> }, { title: "About Me", href: "./about", logo: <SiAboutdotme size="30px" /> }, { title: "Projects", href: "/projects", logo: <FaLaptopCode size="30px" /> }, { title: 'Contents', logo: <BsBag size='30px' /> }, { title: 'Contact Me', logo: <MdOutlineContactPhone size="30px" /> }]

      const techStacks = [<SiBootstrap className="text-3xl text-violet-600" />, <SiTailwindcss className="text-3xl text-sky-700" />, <SiReact className="text-3xl text-cyan-500" />, <SiJavascript className="text-3xl text-yellow-500" />, <SiHtml5 className="text-3xl text-orange-500" />, <SiCss3 className="text-3xl text-blue-500" />, <SiNextdotjs className="text-3xl md:text-white text-stone-500" />, <SiVisualstudiocode className="text-3xl text-sky-700" />, <SiGit className="text-3xl md:text-white text-stone-500" />, <SiMongodb className="text-3xl text-green-700" />, <SiExpress className="text-3xl md:text-white text-stone-500" />, <SiPrisma className="text-3xl md:text-white text-stone-500" />]

      return (<div className="flex static gap-2">
            <header>
                  <LeftSideBar links={links} className="absolute " />
            </header>


            
            <div className="absolute flex-1 flex items-center justify-center m-auto md:left-20 right-0 left-0 top-0 bottom-0">
                  <Circle className="m-3 lg:h-[550px] lg:w-[550px]   w-[380px]  h-[380px] " circleClass="" items={techStacks}>
                        <div className="absolute m-auto rounded-full">
                        <div className="flex flex-col gap-4 items-center text-white justify-center shadow-circle-shadow  shadow-custom4  bg-black  lg:h-[550px] lg:w-[550px] md:w-[380px] md:-[380px] w-[250px] h-[250px] rounded-full">
                              <p className="text-xl z-10">Hey, I'm </p>
                              <p className="md:text-3xl lg:text-5xl text-3xl font-bold z-10">Rahul Solanki</p>
                              <p className="text-gray-500 md:text-lg text-sm z-10">A Frontend Web Developer</p>
                              <Link className="cursor-pointer z-10" href="./about"><p className="text-custom3 ">Know more about me</p></Link>
                        </div>
                        </div>
                  </Circle>
            </div>

  



      </div>);
};

export default HomePage;
