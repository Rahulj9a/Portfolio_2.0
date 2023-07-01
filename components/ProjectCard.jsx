import Image from "next/image";
import React from "react";
import { MdOutlinePreview } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const ProjectCard = (data) => {
  const { title, image, description, techs, links } = data.data;
   
  

  return (
    <div className="projectCard   relative  w-[90%]   h-auto flex rounded-2xl shadow-circle-shadowSmall hover:shadow-custom4">
      <div className={` hover:opacity-100  hover:bg-opacity-80 opacity-0 flex rounded-2xl z-10 bg-custom4   h-full w-full absolute items-center justify-center  `}>
        <div className="flex gap-10">
          {links.map((link)=>{
             
              return(
                <Link href={link}> {link.includes('github')?<BsGithub size={50}/>:<MdOutlinePreview size={50}/>} </Link>
              )
            
          })}
        </div> 
      </div>

      <div className="md:flex-row flex-col flex h-auto   w-full  items-center justify-arounds ">
        <div className="h-auto   w-full   rounded-2xl flex-col  flex items-center justify-around ">
          <Image
           
            src={image}
            height={400}
            width={400}
            className=" rounded-2xl h-auto  w-auto  bg-contain"
          />
          
        </div>
        <div className="md:h-full  md:flex-auto h-auto  justify-around  w-full flex flex-col">
          <div className="  h-auto w-full  flex flex-col justify-center items-center   rounded-tr-2xl ">
            <h2 className="text-custom4 font-bold text-xl h-auto">{title}</h2>
            <p className="text-custom4  h-auto">{description}</p>
          </div>
          <div className="  w-full  flex border-t-2 border-custom2 rounded-br-2xl  items-center justify-evenly overflow-hidden ">
            {techs.map((tech, index) => {
              return <span className="text-custom3 "> {tech} </span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
