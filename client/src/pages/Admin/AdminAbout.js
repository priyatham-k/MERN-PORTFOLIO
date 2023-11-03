import React, { useState } from "react";
import { Button, Form, Input, Select, message, Modal } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
function AdminAbout() {
  const { PortFolioData } = useSelector((store) => store.root);
  const initialValues = {
    ...PortFolioData.about[0],
    skills: PortFolioData.about[0].skills.join(" , "),
  };
  console.log(initialValues);

  const submit = async (values) => {
    console.log(values);
    const tempSkills = values.skills.split(",");
    values.skills = tempSkills;
    const payload = {
      ...values,
      _id: PortFolioData.about[0]._id,
    };
    const response = await axios.post(
      "http://localhost:5000/api/portfolio/update-about",
      payload
    );
    if (response.status === 200) {
      message.success("about updated successfully");
    } else {
      message.error("Error updating about");
    }
  };
  return (
    <div>
      <Form onFinish={submit} initialValues={initialValues}>
        <Form.Item
          name="lottieUrl"
          label="Lottie URL"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description1"
          label="Description1"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description2"
          label="description2"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="skills" label="Skills" rules={[{ required: true }]}>
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
    </div>
  );
}

export default AdminAbout;
