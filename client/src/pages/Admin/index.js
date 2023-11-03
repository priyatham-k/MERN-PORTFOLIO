import React from "react";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import Header from "../../components/Header";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import AdminExperience from "./AdminExperience";
import Adminprojects from "./Adminprojects";
import Admincontact from "./Admincontact";
function Admin() {const { PortFolioData } = useSelector((store) => store.root);
  const items = [
    {
      key: "1",
      label: "Introduction",
      children: <AdminIntro/>,
    },
    {
      key: "2",
      label: "About",
      children: <AdminAbout/>,
    },
    {
      key: "3",
      label: "Experince",
      children: <AdminExperience/>,
    },
    {
      key: "4",
      label: "Projects",
      children: <Adminprojects/>,
    },
    {
      key: "5",
      label: "contact",
      children: <Admincontact/>,
    },
  ];
  return (
    <div>
      <Header />
      <div className="mt-5 p-5">
        {PortFolioData && ( <Tabs defaultActiveKey="1" items={items} />)}
       
      </div>
    </div>
  );
}

export default Admin;
