import LeftSideBar from "@/components/LeftSideBar";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";

const Layout = ({ children, moreInfo }) => {
  const links = [{ title: "Home", logo: <AiOutlineHome size='30px' /> }, { title: "About Me", href: "./about", logo: <SiAboutdotme size="30px" /> }, { title: "Projects", href: "/projects", logo: <FaLaptopCode size="30px" /> }, { title: 'Contents', logo: <BsBag size='30px' /> }, { title: 'Contact Me', logo: <MdOutlineContactPhone size="30px" /> }]
  return (
    <div className="  flex w-screen h-auto ">
      <LeftSideBar links={links} className="" />
      <div className="flex flex-1">
        {children}
       {/*  {moreInfo} */}
      </div>
    </div>
  );
};

export default Layout;
