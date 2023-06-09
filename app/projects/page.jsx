"use client";

import ProjectCard from "@/components/ProjectCard";

import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import LinkPreview from "@/components/linkPreview";

const Projects = () => {
  const {
    data: projectData,
    isLoading: projectLoading,
    error: projectError,
  } = useQuery("projects", async () => {
    const response = await axios.get("/data/projects.json");

    return response.data;
  });
  const {
    data: blogData,
    isLoading: blogLoading,
    error: blogError,
  } = useQuery("blogs", async () => {
    const response = await axios.get("/data/blogs.json");

    return response.data;
  });

  return (
    <div className="flex flex-col justify-evenly m-auto md:left-20 left-0 right-0 min-h-full h-fit   bg-custom2 pt-10  absolute">
      <section id="CodingProjects" className="w-full h-auto  my-10 ">
        {/* <div className=" sticky top-10 w-full h-[1px] my-5 z-10 bg-custom3 text-xl  text-center text-custom4 ">
           Projects
        </div> */}
        <div
          id="projectItems"
          className="flex flex-wrap gap-8 w-auto justify-evenly"
        >
          {projectLoading
            ? "Loading..."
            : projectData.map((project, index) => {
                return <ProjectCard key={index} data={project} />;
              })}
        </div>
      </section>
      <section id="BlogPosts" className="w-full  h-auto">
        <h2 className="sticky top-10 w-full h-12   my-5  z-10 text-xl text-center text-custom4">
          Blogs
        </h2>
        <div className="flex flex-wrap gap-8 w-full  justify-evenly">
          {blogLoading
            ? "Loading..."
            : blogData.map((blog, index) => {
                return <LinkPreview data={blog} key={index}/>;
              })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
