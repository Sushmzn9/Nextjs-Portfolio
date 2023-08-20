import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-screen relative text-center flex flex-col md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0">
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        Projects
      </h3>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
