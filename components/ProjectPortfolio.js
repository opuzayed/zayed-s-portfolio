import React from "react";
import Link from "next/link";
import allProjectsData from "../liv/data/projectData.json";

const ProjectPortfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-2 pt-28 w-full ">
      <h2 className=" tracking-widest uppercase text-[#5651e5] text-center pb-10">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allProjectsData.map((projectData) => (
          <div key={projectData.id}>
            <div className="  items-center justify-center h-auto w-full shadow-xl sm:text-lg rounded-xl group">
              <div className=" shadow-md hover:scale-105 ease-in duration-500 ">
                <img className="rounded-md " src={projectData.img1} alt="/" />
              </div>
              <div className="mx-9 my-4">
                <h2 className="text-1xl   text-cyan-900 tracking-wider">
                  Project Name:
                </h2>
                <p>{projectData.name}</p>
              </div>

              <div className="mx-9 -14  border-cyan-700 ">
                <h6 className=" text-1xl text-cyan-900 tracking-wider ">
                  Tools:
                </h6>
                <small className="">{projectData.tools}</small>
              </div>
              <div className="mx-9 text-center  my-3 p-1 shadow-sm shadow-gray-200  hover:scale-105 ease-in duration-200 rounded-lg bg-cyan-500 text-white font-normal cursor-pointer">
                <Link href={`/project/${projectData.id}`}>
                  <a className=" ">Project Details</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPortfolio;
