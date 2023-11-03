import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { PortFolioData } = useSelector((store) => store.root);
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          {PortFolioData && (
            <dotlottie-player
              src={PortFolioData?.about[0].lottieUrl || ""}
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          )}
        </div>
        <div className="w-1/2 flex flex-col gap-5 sm:w-full sm:text-center">
          <p className="text-white">
            {PortFolioData?.about[0].description1 || ""}
          </p>
          <p className="text-white">
            {PortFolioData?.about[0].description2 || ""}
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">The technologies</h1>
        <div className="flex flex-wrap gap-8 py-2 sm:gap-4">
          {PortFolioData?.about[0].skills.map((tech) => (
            <div className="border border-tertiary py-3 px-10 text-tertiary sm:px-6 sm:py-2">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
