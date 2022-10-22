import { Col, Row, Card, Input, Button, Modal, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import logo from "./logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isEmail, setIsEmail] = useState();

  const loginBtnClicked = () => {
    navigate('/conversations', { replace: true });
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  const tabList = [
    {
      key: "tab1",
      tab: "Log in",
    },
  ];
  const contentList = {
    tab1: (
      <div>
        <div className="m-3">
          <Input
            placeholder="john.doe@gmail.com"
            prefix={<UserOutlined />}
            className="mb-4"
          />
          <Input.Password
            placeholder="input password"
            prefix={<LockOutlined />}
          />
        </div>
        <Form.Item className="pt-3" wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
          <Button type="primary" className="me-4 w-25" onClick={loginBtnClicked}>
            Log in
          </Button>
          <Button onClick={showModal}>Forget password?</Button>
        </Form.Item>
      </div>
    ),
  };



  useEffect(() => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsDisabledButton(true);
    if (re.test(isEmail)) {
      setIsDisabledButton(false);
    }
  });

  return (
    <Row
      style={{ height: "100vh", backgroundColor: "rgb(251 248 248)" }}
      align="middle"
      justify="center"
    >
      <Col>
        <Card
          img={logo}
          style={{
            width: "100%",
            borderRadius: "20px",
          }}
          title={
            <Row justify="center">
              <img src={logo} style={{ width: "50%" }} align="middle" />
            </Row>
          }
          tabList={tabList}
        >
          {contentList["tab1"]}
        </Card>
      </Col>
      <Modal
        title={<span style={{ color: "#fff" }}>Request a Password Reset</span>}
        open={isModalOpen}
        footer={null}
        bodyStyle={{ padding: 0, borderRadius: "10px" }}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ borderRadius: "10px" }}
      >
        <p className="pe-5 ps-5 pt-5">Please enter your e-mail address.</p>
        <Form
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Form.Item
            className="pe-5 ps-5 pb-4"
            name={["your email"]}
            rules={[{ type: "email" }]}
          >
            <Input
              onChange={(e) => {
                setIsEmail(e.target.value);
              }}
              placeholder="rabconnectino1380@gmail.com"
            />
          </Form.Item>

          <Form.Item
            className="pt-3 pb-2"
            wrapperCol={{ ...layout.wrapperCol, offset: 10 }}
            style={{ borderTop: "1px solid #e8e8e8" }}
          >
            <Button className="me-3" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleOk}
              disabled={isDisabledButton}
            >
              Request Password Reset
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Row>
  );
};

export default Login;
