"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";
import { useQuery } from "react-query";
import useMoreInfo from "@/hooks/useMoreInfo";

const page = () => {
   
  const { data:userDetail, error, isLoading, refetch } = useMoreInfo();
  
   
  
  console.log(userDetail)
   
  return (
     
    <div
      id="MoreInfo"
      className="w-1/4 h-screen fixed right-0 top-0 bottom-0 hidden md:block   bg-custom1 pt-10 text-white"
    >
      {isLoading?<div className="text-white">Loading...</div>:
    <button
        onClick={() => 
          refetch("Github")
          
        }
      >
        Github
      </button>}
    </div>
  );
};

export default page;
