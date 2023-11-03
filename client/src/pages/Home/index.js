import React, { useContext } from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experinces from "./Experinces";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";
function Home() {
  const PortFolioData = useSelector((state) => state.root);
  console.log("PortFolioData", PortFolioData);
  return (
    <div>
      <Header />
      {PortFolioData && (
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About />
          <Experinces />
          <Projects />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
    </div>
  );
}

export default Home;
