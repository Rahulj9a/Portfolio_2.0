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
        leftSideBar.isOpen ? "md:w-[350px] w-[250px]" : "md:w-20 w-0"
      } bg-black duration-500 relative py-2`}
    >
      <button
        onClick={() => leftSideBar.onToggle()}
        className={`cursor-pointer flex absolute m-auto -right-4 md:-right-5 top-0 bottom-0 md:w-4 w-3 rounded-sm h-20 ${
          leftSideBar.isOpen
            ? "md:-translate-x-6 -translate-x-5 bg-white"
            : "bg-black animate-pulse"
        } duration-1000 z-50 `}
      ></button>

      <div id="userAvatar">
        <LeftSideBarItems
          title="Rahul Solanki"
          profile
          detail="web developer"
          logo=<Image width={75} height={75} src="/images/profilepic.jpg" />
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
