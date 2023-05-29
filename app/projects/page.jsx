import React from "react";
import LeftSideBar from '@/components/LeftSideBar'
import {BiArrowBack} from'react-icons/bi'

const Projects = () => {
  const links = [
    { title: "Back", href: "back", logo: <BiArrowBack size="40px" /> },
  ];
  return (
    <div className="flex relative">
      <LeftSideBar links={links} className="absolute" />
      <div className="flex-1 m-auto md:left-20   absolute">
        <div className="border-2 border-blue-500 ">Projects</div>
      </div>
    </div>
  );
};

export default Projects;
