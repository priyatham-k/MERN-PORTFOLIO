import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";
import { useSelector } from "react-redux";

function Projects() {
  const [selectedItemIndex, SetselectedItemIndex] = useState(0);
  const { PortFolioData } = useSelector((store) => store.root);

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div
          className="flex flex-col gap-10 border-l-2 
                 border-[#318b84] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full"
        >
          {PortFolioData &&
            PortFolioData.projects.map((project, index) => (
              <div
                onClick={() => SetselectedItemIndex(index)}
                className="cursor-pointer"
              >
                <h1
                  className={`text-xl px-5 ${
                    selectedItemIndex === index
                      ? `text-tertiary border-tertiary border-l-4 -ml-[3px] py-3  bg-[#2b684b2c]`
                      : `text-white`
                  }`}
                >
                  {project.title}
                </h1>
              </div>
            ))}
        </div>
        <div className="flex gap-10 items-center justify-center sm:flex-col">
          <img
            src={
              PortFolioData && PortFolioData.projects[selectedItemIndex].image
            }
            className="w-80 h-60 "
            alt=""
          />
          <div className="flex flex-col gap-5 w-3/4">
            <h1 className="text-xl text-secondary">
              {PortFolioData && PortFolioData.projects[selectedItemIndex].title}
            </h1>
            <p className="text-xl text-white">
              {PortFolioData &&
                PortFolioData.projects[selectedItemIndex].description}
            </p>
            <p className="text-xl text-white">
              {projects[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
