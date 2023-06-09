import React from "react";

const SkillSection = ({ skillName, skillIcon, children }) => {
  return (
    <div id={`${skillName}Corner`} className="h-auto flex w-full md:text-base text-sm px-5 min-h-[80px]">
       
        <div
          id="skillName"
          className="flex items-center justify-center md:pr-3 text-custom4  md:w-2/12 w-3/12"
        >
          <p>{skillName}</p>
        </div>
        <div
          id="skillLineNDot"
          className="flex items-center justify-center relative w-1/12"
        >
          <div className="absolute h-full w-[2px] bg-custom3"></div>
          <div className="absolute md:h-7 md:w-7 w-3 h-3 border-2 shadow-circle-shadowSmall hover:shadow-circle-shadow hover:shadow-custom4 shadow-custom4 border-custom3 rounded-full bg-custom2 z-10">
            {skillIcon || ""}
          </div>
        </div>

        <div id="skillDetail" className="py-4 border-b-2 border-b-custom3 items-center text-custom3 pl-5 flex-1">
          {children}
        </div>
       
    </div>
  );
};

export default SkillSection;