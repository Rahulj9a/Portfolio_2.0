import Image from "next/image";
import React from "react";

const ProjectCard = (data) => {
  const { title, image, description, techs } = data.data;
  console.log(title);

  return (
    <div className="projectCard md:w-[350px] md:h-[350px] w-[300px] h-[300px] rounded-2xl hover:shadow-circle-shadowSmall hover:shadow-custom4">
      <div className="h-3/5 w-full bg-custom1 rounded-t-2xl flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          height={500}
          width={500}
          className=" w-auto h-auto bg-contain"
        />
      </div>
      <div className="h-2/5 relative w-full flex flex-col rounded-b-2xl">
        <div className="h-3/5 w-full  flex flex-col justify-center items-center bg-custom1 border-t-2 border-custom2 ">
          <h2 className="text-custom4 font-bold text-lg" >{title}</h2>
          <p className="text-custom3">{description}</p>
        </div>
        <div className="h-2/5 w-full bg-custom1 border-t-2 border-custom2 rounded-b-2xl flex items-center justify-evenly overflow-hidden ">
          {techs.map((tech,index)=>{return (<span className="text-custom3 "> {tech} </span>)})}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
