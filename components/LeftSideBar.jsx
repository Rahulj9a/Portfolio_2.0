"use client";
import useLeftSideBar from "@/hooks/useLeftSideBar";
import { useEffect, useState } from "react";
import LeftSideBarItems from "./LeftSideBarItems";
import Image from "next/image";

const LeftSideBar = ({ links = [{ title: "Home", href: "./" }] }) => {
  const leftSideBar = useLeftSideBar();

  return (
    <div
      className={`h-full min-h-screen z-20 ${
        leftSideBar.isOpen ? "md:w-[350px] w-[250px]" : "md:w-20 md:block   w-0 "
      } bg-custom2 duration-500 py-2 fixed border-r-2 border-r-custom4`}
    >
      <button
        onClick={() => leftSideBar.onToggle()}
        className={`cursor-pointer bg-custom3 flex absolute m-auto  -right-5 top-0 bottom-0  w-4   rounded-sm h-20 ${
          leftSideBar.isOpen
            ? " -translate-x-6 "
            : "  animate-pulse"
        } duration-1000 z-50 `}
      ></button>

      <div id="userAvatar">
        <LeftSideBarItems
          title="Rahul Solanki"
          profile
          detail="web developer"
          logo=<Image width={75} height={75} className="h-16 w-16 rounded-full" src="/images/profilepic.jpg" />
        />
      </div>

      <nav className=" h-fit my-2  flex  flex-col">
        {links.map((link, index) => {
          return <LeftSideBarItems {...link} key={index} />;
        })}
      </nav>
    </div>
  );
};

export default LeftSideBar;
