import React from "react";
import { Button, Form, Input, Select,message } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
function AdminIntro() {
  const { PortFolioData } = useSelector((store) => store.root);
  console.log(PortFolioData);
  const  submit = async (values) => {
    console.log(values);
    const payload = {
        ...values,
        _id: PortFolioData.intro[0]._id,
      }
    const response = await axios.post("http://localhost:5000/api/portfolio/update-intro", payload);
    if(response.status === 200){
        message.success('Intro updated successfully');
    } else{
        message.error('Error updating intro');
    }
  };
  return (
    <div>
      <Form onFinish={submit} initialValues={PortFolioData.intro[0]}>
        <Form.Item
          name="welcometext"
          label="Welcome Text"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="firstname"
          label="First name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastname"
          label="Last name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="caption" label="Caption" rules={[{ required: true }]}>
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
    </div>
  );
}

export default AdminIntro;
