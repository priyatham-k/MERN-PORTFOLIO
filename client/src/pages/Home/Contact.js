import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { PortFolioData } = useSelector((store) => store.root);
  console.log(PortFolioData);
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-white">{"{"}</h1>
          {PortFolioData &&
            Object.keys(PortFolioData.contacts[0]).map((key) => {
              if (key !== "contacturl" && key !== "_id") {
                return (
                  <h1 className="ml-5" key={key}>
                    <span className="text-white">{key}: </span>
                    <span className="text-white">
                      {PortFolioData.contacts[0][key]}
                    </span>
                  </h1>
                );
              }
              return null;
            })}

          <h1 className="text-white">{"}"}</h1>
        </div>
        <div className="h-[400px]">
          {PortFolioData && (
            <dotlottie-player
              src={PortFolioData?.contacts[0].contacturl || ""}
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
