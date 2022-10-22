import React, { useState } from "react";
import { Layout, Button, Drawer, Form, Input, Tooltip } from "antd";
import { QuestionCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "./cannedResponses.scss";

const { Header, Content, Footer } = Layout;

const CannedResponses = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Layout className="site-layout">
      <Header className="site-layout-background">
        <h5>
          Canned Responses
          <QuestionCircleOutlined className="icon ms-1 p-1" />
        </h5>
        <Button type="primary" onClick={showDrawer}>
          Add New Responses
        </Button>
      </Header>
      <Content>
        <p>
          Canned Responses are used for common replies to inquiries such as
          hours, frequently asked questions, and more.
        </p>
        <Drawer
          title={<div style={{ color: "white" }}>Add Canned Response</div>}
          placement="right"
          onClose={onClose}
          open={open}
          headerStyle={{ backgroundColor: "#1890ff" }}
        >
          <Form
            form={form}
            name="dynamic_rule"
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              label="Friendly Name"
              name="name "
              colon={false}
              rules={[
                {
                  required: true,
                  message: "Please input friendly name",
                },
              ]}
            >
              <Input placeholder="e.g. How Can We Help You?" />
            </Form.Item>
            <Form.Item
              label="Auto-Reply to Keyword: (optional)"
              name="auto"
              colon={false}
              rules={[
                {
                  message: "Please input auto-reply to keyword",
                },
              ]}
            >
              <Input
                placeholder="e.g. SUPPROT or TACOS or SUPPORT TACOS"
                suffix={
                  <Tooltip
                    placement="topLeft"
                    title="(If this keyword is received exactly by your phone number, it will trigger this auto-reply. Leave blank to disable.)"
                  >
                    <InfoCircleOutlined className="icon" />
                  </Tooltip>
                }
              />
            </Form.Item>
            <Form.Item
              name={["user", "message"]}
              label="Message Body"
              colon={false}
              rules={[
                {
                  required: true,
                  message: "Please input message body",
                },
              ]}
            >
              <Input.TextArea
                placeholder="e.g. Thanks for contact us today, how can we help you?"
                style={{ height: "18vh" }}
              />
            </Form.Item>
            <Button>View Merge Fields</Button>
            <Form className="pt-3">
              <Button className="w-100" type="primary">
                View Merge Fields
              </Button>
            </Form>
          </Form>
        </Drawer>
      </Content>
    </Layout>
  );
};

export default CannedResponses;
