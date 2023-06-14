"use client";

import ProjectCard from "@/components/ProjectCard";
import useProjectStore from "@/store/projectStore";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const Projects = () => {
  const { projects, setProjects } = useProjectStore();
  const { data, isLoading, error } = useQuery("projects", async () => {
    const response = await axios.get("/data/projects.json");  
    
     
    
    return response.data;
  });
   
  return (
    <div className="flex flex-col justify-evenly m-auto md:left-20 left-0 right-0 min-h-full h-fit   bg-custom2 pt-10  absolute">
      <section id="CodingProjects" className="w-full h-auto">
        <h2 className=" sticky top-10 w-full h-8 my-5 bg-custom1 text-xl  text-center text-custom4">
          Projects
        </h2>
        <div id="projectItems" className="flex flex-wrap gap-8 w-auto justify-evenly">

              {isLoading?"Loading...":data.map((project, index)=>{
                return (<ProjectCard key={index} data={project} />)
              })}
        </div>
      </section>
      <section id="BlogPosts" className="w-full  h-auto">
        <h2 className="sticky top-10 w-full h-8 my-5 bg-custom1 text-xl text-center text-custom4">
          Blogs
        </h2>
        <div className="flex flex-wrap gap-y-8 w-full  justify-evenly">
           {/* projectCard */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
