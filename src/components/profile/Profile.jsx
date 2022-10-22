import React from "react";
import { Layout, Tabs, Form, Input, Row, Col, Button } from "antd";
import { CheckOutlined, LockOutlined } from "@ant-design/icons";
import "./profile.scss";
const { Header, Content } = Layout;

const Profile = () => {
  const items = [
    {
      label: "Account Details",
      key: "item-1",
      children: (
        <div>
          <h3>Account Details</h3>
          <Row>
            <Col span={12} offset={6}>
              <Form>
                <Form.Item label="Full Name" required={true}></Form.Item>
                <Input
                  value="Develop Test"
                  readOnly={true}
                  suffix={<CheckOutlined className="icon" />}
                />
                <Form.Item
                  className="pt-3"
                  label="E-mail"
                  required={true}
                ></Form.Item>
                <Input
                  value="develop@computerlinx.com"
                  readOnly={true}
                  suffix={<CheckOutlined className="icon" />}
                />
                <Form.Item className="pt-3" label="Phone Number"></Form.Item>
                <Input value="+19999999999" readOnly={true} />
              </Form>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      label: "Change Password",
      key: "item-2",
      children: (
        <div>
          <h3>Change Password</h3>
          <p>
            Please enter a new password and confirm it to change your password.
          </p>
          <Row>
            <Col span={12} offset={6}>
              <Form>
                <Form.Item
                  className="pt-2"
                  label="Enter New Password"
                  required={true}
                ></Form.Item>
                <Input.Password
                  className="mb-4"
                  placeholder="************"
                  prefix={<LockOutlined />}
                />
                <Form.Item
                  label="Confirm New Password"
                  required={true}
                ></Form.Item>
                <Input.Password className="mb-5"
                  placeholder="************"
                  prefix={<LockOutlined />}
                />
                <Button type="primary" className="w-100">
                  Update password
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      ),
    },
  ];
  return (
    <Layout className="site-layout">
      <Header className="p-3 site-layout-background">
        <h5>My Profile</h5>
        <span>Ver. 5.0.0</span>
      </Header>
      <Content className="p-5">
        <Tabs items={items} />
      </Content>
    </Layout>
  );
};

export default Profile;
