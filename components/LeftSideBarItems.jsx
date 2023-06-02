'use client'
import useLeftSideBar from "@/hooks/useLeftSideBar";
import Image from "next/image";
import {useRouter} from "next/navigation";
import { useCallback } from "react";
const LeftSideBarItems = ( {profile = false, logo="", title, detail = "",href='./'} ) => {
  const leftSideBar = useLeftSideBar();
   
 const router = useRouter()

  const handleClick = useCallback(()=>{
    if(href=="back"){
      router.back()
    }
    router.push(href)
  },[href, router])
  
  return (
    <div onClick={handleClick} className={`${!profile?'hover:bg-custom1':''} cursor-pointer rounded-lg flex  md:pl-2 relative items-center overflow-hidden h-16 bg-transparent ${leftSideBar.isOpen?'pl-2':'justify-center'}`}>
      <div className={`${profile?"w-16 h-16":'w-12 h-12'} bg-custom4 rounded-full absolute flex items-center justify-center z-10`}>{logo}</div>
      <div
        className={` md:w-52 absolute duration-300 left-20 items-center ${
          leftSideBar.isOpen ? "" : "-translate-x-72"
        }`}
      >
        <p className={`text-center  text-custom4 ${
          profile ? "md:text-3xl text-lg" : "md:text-2xl text-base"
        }`}>
          {title}
        </p>
        <p className="  md:text-base text-sm  text-custom3 text-center">{detail}</p>
      </div>
    </div>
  );
};

export default LeftSideBarItems;
