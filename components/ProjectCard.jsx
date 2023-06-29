import Image from "next/image";
import React from "react";

const ProjectCard = (data) => {
  const { title, image, description, techs } = data.data;
  console.log(title);

  return (
    <div className="projectCard md:w-[90%] md:h-[350px] flex  h-[300px] rounded-2xl  shadow-circle-shadowSmall hover:shadow-custom4">
      <div className="h-full w-full   rounded-l-2xl  flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          height={500}
          width={500}
          className=" w-auto h-auto bg-contain"
        />
      </div>
      <div className="h-full relative w-full flex flex-col">
        <div className="h-4/5 w-full  flex flex-col justify-center items-center   rounded-tr-2xl ">
          <h2 className="text-custom4 font-bold text-xl" >{title}</h2>
          <p className="text-custom4">{description}</p>
        </div>
        <div className="h-1/5 w-full  border-t-2 border-custom2 rounded-br-2xl  flex items-center justify-evenly overflow-hidden ">
          {techs.map((tech,index)=>{return (<span className="text-custom3 "> {tech} </span>)})}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
