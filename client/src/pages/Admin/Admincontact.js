import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
function Admincontact() {
  const { PortFolioData } = useSelector((store) => store.root);
  console.log(PortFolioData);
  const submit = async (values) => {
    console.log(values);
    const payload = {
      ...values,
      _id: PortFolioData.contacts[0]._id,
    };
    const response = await axios.post(
      "http://localhost:5000/api/portfolio/update-contact",
      payload
    );
    if (response.status === 200) {
      message.success("Intro updated successfully");
    } else {
      message.error("Error updating intro");
    }
  };
  return (
    <div>
      <Form onFinish={submit} initialValues={PortFolioData.contacts[0]}>
        <Form.Item
          name="name"
          label="Welcome Text"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="contacturl"
          label="Contact Image"
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
    </div>
  );
}

export default Admincontact;
