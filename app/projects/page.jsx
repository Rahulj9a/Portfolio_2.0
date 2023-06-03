import ProjectCard from "@/components/ProjectCard";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col justify-evenly w-3/4 m-auto md:left-20 left-0 min-h-full h-fit   bg-custom2 pt-10  absolute">
      <section id="CodingProjects" className="w-full h-auto">
        <h2></h2>
        
        
      </section>
      <section id="BlogPosts">
        <h2></h2>
      <div className="flex flex-wrap gap-y-8 w-full h-auto justify-evenly">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        </div>
      </section>
    </div>
  );
};

export default Projects;
