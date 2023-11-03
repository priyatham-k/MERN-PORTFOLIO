import React, { useState } from "react";
import { Form, Input, message, Modal } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPortFolioData } from "../../redux/rootSlice";
function Adminprojects() {
  const { PortFolioData } = useSelector((store) => store.root);
  console.log("PortFolioData", PortFolioData);
  const Dispatch = useDispatch();
  const [project, setproject] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setAddIsModalOpen] = useState(false);
  const submit = async (values) => {
    console.log(values);
    const payload = {
      ...values,
      _id: PortFolioData.projects
        .filter(
          
          (project) =>
            project.link === project.link && project.image === project.image
        )
        .map((project) => project._id),
    };

    const response = await axios.post(
      "http://localhost:5000/api/portfolio/update-projects",
      payload
    );
    if (response.status === 200) {
      setIsModalOpen(false);
      message.success("projects updated successfully");
    } else {
      message.error("Error updating projects");
    }
  };
  const newsubmit = async (values) => {
    console.log(values);
    const tempSkills = values.technologies.split(",");
    values.technologies = tempSkills;
    const payload = {
      ...values,
    };
    const response = await axios.post(
      "http://localhost:5000/api/portfolio/add-projects",
      payload
    );
    if (response.status === 200) {
      setAddIsModalOpen(false);
      message.success("projects updated successfully");
    } else {
      message.error("Error updating projects");
    }
  };
  async function getpersonalData() {
    await axios
      .get("http://localhost:5000/api/portfolio/get-portfolio-data")
      .then((response) => {
        Dispatch(setPortFolioData(response.data)); //
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const deleteExp = async (values) => {
    const id = { _id: values._id };
    const response = await axios.post(
      "http://localhost:5000/api/portfolio/delete-project",
      id
    );
    if (response.status === 200) {
      message.success("Experince deleted successfully");
      getpersonalData();
    } else {
      message.error("Error deleted Experince");
    }
  };
  return (
    <div>
      {" "}
      <div className="flex justify-end">
        <button
          className="shadow p-3 rounded bg-black text-white"
          onClick={() => {
            setAddIsModalOpen(true);
          }}
        >
          Add new Experience
        </button>
      </div>
      <div className="flex flex-wrap gap-5">
        {PortFolioData &&
          PortFolioData.projects.map((exp, index) => (
            <div className="flex">
              <div className="shadow p-5 w-full">
                <div className="text-black p-1 text-2xl">{exp.title}</div>{" "}
                <div className="text-black p-1 ">{exp.image}</div>{" "}
                <div className="text-black p-1 ">{exp.link}</div>{" "}
                <div className="text-black p-1 ">
                  {exp.technologies.join(" , ")}
                </div>
                <div className="flex justify-end">
                  <button
                    className="shadow p-2 m-2 bg-[#7dc6be] rounded text-white"
                    onClick={() => {
                      setIsModalOpen(true);
                      setproject(exp);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="shadow p-2 m-2 bg-[#e93c3c] rounded text-white"
                    onClick={() => {
                      deleteExp(exp);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Modal title="Basic Modal" open={isModalOpen} footer={[]}>
        <Form onFinish={submit} initialValues={project}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="project Image"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="link"
            label="Link to the project"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="technologies"
            label="Skills"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <div className="w-full flex justify-end">
            <button
              className="px-10 py-2 bg-primary text-white rounded"
              type="submit"
            >
              Save
            </button>
          </div>
        </Form>
      </Modal>
      <Modal title="Basic Modal" open={isAddModalOpen} footer={[]}>
        <Form onFinish={newsubmit}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="Project Image"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="link"
            label="Project Link"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="technologies"
            label="Skills"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <div className="w-full flex justify-end">
            <button
              className="px-10 py-2 bg-primary text-white rounded"
              type="submit"
            >
              Save
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Adminprojects;
