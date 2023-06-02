import React from "react";

const SkillSection = ({ skillName, skillIcon, children }) => {
  return (
    <div id={`${skillName}Corner`} className="h-auto flex w-full py-4">
       
        <div
          id="skillName"
          className="flex items-center justify-end pr-3 w-2/12"
        >
          <p>{skillName}</p>
        </div>
        <div
          id="skillLineNDot"
          className="flex items-center justify-center relative w-1/12"
        >
          <div className="absolute h-full w-[2px] bg-custom3"></div>
          <div className="absolute h-7 w-7 border-2 shadow-circle-shadowSmall shadow-custom4 border-custom3 rounded-full bg-custom2 z-10">
            {skillIcon || ""}
          </div>
        </div>

        <div id="skillDetail" className="flex items-center pl-5 flex-1">
          {children}
        </div>
       
    </div>
  );
};

export default SkillSection;