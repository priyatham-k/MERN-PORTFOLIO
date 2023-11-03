import React from "react";
import { useSelector } from "react-redux";
function Intro() {
  const { PortFolioData } = useSelector((store) => store.root);

 

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">{PortFolioData?.intro[0].welcometext || ""} </h1>
      <h1 className="text-secondary text-7xl sm:text-2xl text-semibold">
       {PortFolioData?.intro[0].firstname || ""} {PortFolioData?.intro[0].lastname || ""}
      </h1>
      <h1 className="text-white text-6xl sm:text-2xl text-semibold">
      {PortFolioData?.intro[0].caption || ""}
      </h1>
      <p className="text-white w-3/4">
      {PortFolioData?.intro[0].description || ""}
      </p>
      <button className="border-2 text-tertiary border-tertiary rounded px-10 py-3 sm:px-7 sm:py-1">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
