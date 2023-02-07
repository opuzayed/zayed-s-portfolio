import React, { useEffect, useState } from "react";
import skillsData from "../liv/data/imageData.json";

const AllSkills = (props) => {
  return (
    // <div id="skills" className="p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center w-full pt-28 ">
        <h2 className="tracking-widest uppercase text-[#5651e5] text-center pb-8">
          Skills
        </h2>
       
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="py-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img src={skill.img} alt="/" width="64px" height="64px" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
};

export default AllSkills;
