import LeftSideBar from "@/components/LeftSideBar";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Layout = ({ children, moreInfo }) => {
  const links = [
    { title: "Back", href: "back", logo: <BiArrowBack size="40px" /> },
  ];
  return (
    <div className="md:w-auto flex w-screen h-auto ">
      <LeftSideBar links={links} className="" />
      <div className="flex flex-1">
        {children}
        {moreInfo}
      </div>
    </div>
  );
};

export default Layout;
