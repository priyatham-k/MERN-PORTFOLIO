import React, { useState } from "react";
import { Button, Form, Input, Select, message, Modal } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPortFolioData } from "../../redux/rootSlice";
function AdminExperience() {
  const { PortFolioData } = useSelector((store) => store.root);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [exp, setExp] = useState(null);
  const Dispatch = useDispatch();
  const submit = async (values) => {
    console.log(values);
    const payload = {
      ...values,
      _id: PortFolioData.experience
        .filter(
          (project) =>
             project.company === project.company
        )
        .map((project) => project._id)[0],
    };console.log(payload);
    const response = await axios.post(
      "http://localhost:5000/api/portfolio/update-expereince",
      payload
    );
    if (response.status === 200) {
      setExp(null);
      setIsModalOpen(false);
      message.success("Expereince updated successfully");
    } else {
      message.error("Error updating Expereince");
    }
  };
  const newsubmit = async (values) => {
    const payload = {
      ...values,
    };
    const response = await axios.post(
      "http://localhost:5000/api/portfolio/add-expereince",
      payload
    );
    if (response.status === 200) {
      setExp(null);
      setIsAddModalOpen(false);
      message.success("Experince Added successfully");
    } else {
      message.error("Error Adding Expereince");
    }
  };
  const deleteExp = async (values) => {
    const id = {_id:values._id};
    const response = await axios.post(
      "http://localhost:5000/api/portfolio/delete-experience", id
    );
    if (response.status === 200) {
      message.success("Experince deleted successfully");
      getpersonalData();
    } else {
      message.error("Error deleted Experince");
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
  return (
    <div>
      <div className="flex justify-end">
        <button
          className="shadow p-3 rounded bg-black text-white"
          onClick={() => {
            setIsAddModalOpen(true);
          }}
        >
          Add new Experience
        </button>
      </div>
      <div className="flex flex-wrap gap-5">
        {PortFolioData &&
          PortFolioData.experience.map((exp, index) => (
            <div className="flex ">
              <div className="shadow p-5 w-full">
                <div className="text-black p-1 text-2xl">{exp.title}</div>
                <div className="text-black p-1">{exp.period}</div>
                <div className="text-black p-1">{exp.company}</div>
                <div className="text-black p-1">{exp.description}</div>
                <div className="flex justify-end">
                  <button
                    className="shadow p-2 m-2 bg-[#7dc6be] rounded text-white"
                    onClick={() => {
                      console.log(exp);
                      setIsModalOpen(true);
                      setExp(exp);
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
      <Modal
        title="Experience Form"
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form onFinish={submit} initialValues={exp}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="company"
            label="Company"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="period" label="Period" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
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

      <Modal
        title="Add Experience Form"
        open={isAddModalOpen}
        footer={null}
        onCancel={() => setIsAddModalOpen(false)}
      >
        <Form onFinish={newsubmit} initialValues={{}}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="company"
            label="Company"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="period" label="Period" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
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

export default AdminExperience;
