import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";
import { useSelector } from "react-redux";

function Experinces() {
  const [selectedItemIndex, SetselectedItemIndex] = useState(0);
  const { PortFolioData } = useSelector((store) => store.root);
  return (
    <div>
      <SectionTitle title="Experinces" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div
          className="flex flex-col gap-10 border-l-2 
                 border-[#318b84] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full"
        >
          {PortFolioData &&
            PortFolioData.experience.map((experience, index) => (
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
                  {experience.period}
                </h1>
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-5 w-3/4">
          <h1 className="text-xl text-secondary">
            {PortFolioData && PortFolioData.experience[selectedItemIndex].title}
          </h1>
          <h1 className="text-xl text-secondary">
            {PortFolioData && PortFolioData.experience[selectedItemIndex].company}
          </h1>
          <p className="text-xl text-white">
            {PortFolioData && PortFolioData.experience[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experinces;
