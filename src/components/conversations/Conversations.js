import { Col, Layout, Row, Button, Card, Checkbox, Input, Popconfirm, Drawer, List, Pagination } from "antd";
import { FaRegQuestionCircle, FaArchive } from "react-icons/fa";
import { MdOutgoingMail } from 'react-icons/md';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import React, { useState } from "react";
import { useSelector } from "react-redux";

import './Conversations.scss';
import ConversationView from "./ConversationView";


const Conversations = () => {
    const [openNewConversaion, setOpenNewConversation] = useState(false);
    const [currentContactPage, setCurrentContactPage] = useState(1);
    const [selectedContact, selectContact] = useState(-1);

    const contactsObj = useSelector(state => state.conversation.contacts);
    const contacts = Object.keys(contactsObj).map(key => ({ ...contactsObj[key], id: key }));

    const timeToStr = (time) => {
        let lastTime = new Date(time);
        let currentTime = new Date();
        let deltaTime = currentTime - lastTime;
        if (deltaTime < 60000) return 'a few seconds ago';
        else if (deltaTime < 3600000) return '' + Math.floor(deltaTime / 60000) + ' minutes ago';
        else if (deltaTime < 86400000) return '' + Math.floor(deltaTime / 3600000) + ' hours ago';
        else if (lastTime.getFullYear() === currentTime.getFullYear()) return (lastTime.getMonth() + 1) + '/' + lastTime.getDate();
        else return lastTime.toLocaleDateString();
    }

    return (
        <Layout className="site-layout">
            <Layout.Header className="site-layout-background">
                <Row justify="space-between" style={{ width: '100%' }}>
                    <Col>Conversations&nbsp;<FaRegQuestionCircle className="guideButton" /></Col>
                    <Col>
                        <Button type="primary" onClick={() => setOpenNewConversation(true)} style={{ borderRadius: '4px' }} icon={<><BiMessageRoundedAdd className="buttonIcon" />&nbsp;</>}>New Conversation</Button>
                        <Drawer width={500} title={<div style={{ color: 'white' }}>Start New Conversation</div>} headerStyle={{ backgroundColor: '#1890ff' }} bodyStyle={{ padding: '24px', textAlign: 'center' }} placement="right" onClose={() => setOpenNewConversation(false)} open={openNewConversaion}>
                            <p style={{ padding: '15px 15px 15px 0px', color: '#000000a6' }}>Enter a number or select a contact from the list below to begin a conversation.</p>
                        </Drawer>
                    </Col>
                </Row>
            </Layout.Header>
            <Row className="chat">
                <Col flex={1} className="contacts">
                    <Card
                        type="inner"
                        title={
                            <Row className="toolbar">
                                <Col flex={1}><Checkbox /></Col>
                                <Col flex={4}><Input placeholder="Search conversations" /></Col>
                                <Col flex={2} style={{ textAlign: "left" }}>
                                    <Popconfirm placement="right" title='Are you sure you want to archive these conversations?' onConfirm={() => console.log('confirm')} okText="Yes" cancelText="No">
                                        <Button icon={<FaArchive />} />
                                    </Popconfirm>
                                    <Popconfirm placement="right" title='Are you sure you want to mark these conversations unread?' onConfirm={() => console.log('confirm')} okText="Yes" cancelText="No">
                                        <Button icon={<MdOutgoingMail />} />
                                    </Popconfirm>
                                </Col>
                            </Row>
                        }
                        style={contacts.length === 0 ? { border: 'none' } : {}}
                        bodyStyle={{ padding: 0 }}
                    >
                        <List
                            itemLayout="vertical"
                            // size="large"
                            style={{ width: '100%' }}
                            pagination={false}
                            locale={{
                                emptyText: (
                                    <div style={{ textAlign: 'center' }}>
                                        <h5>No Active Conversations</h5>
                                        Tip: Start a conversation with someone new today!
                                    </div>
                                )
                            }}
                            dataSource={contacts.slice((currentContactPage - 1) * 10, currentContactPage * 10)}
                            renderItem={(contact) => (
                                <List.Item className={selectedContact === contact.id ? "contact active" : "contact"} onClick={() => selectContact(contact.id)}>
                                    <Row className="contact-container" justify="space-between" align="middle">
                                        <Col>
                                            <Row align='middle'>
                                                <Checkbox />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Col>
                                                    <Row className="contact-name">{contact.name}</Row>
                                                    <Row className="contact-lastMessage">{contact.lastMessage}</Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col style={{ width: '100px' }}>
                                            <Row align='middle'>
                                                <Col>
                                                    <Row ></Row>
                                                    <Row className="contact-lastUpdatedTime">{timeToStr(contact.lastUpdatedTime)}</Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </List.Item>
                            )}
                        />
                    </Card>
                    {contacts.length ? (
                        <Pagination className="pagination" simple defaultCurrent={1} current={currentContactPage} onChange={(page) => setCurrentContactPage(page)} total={contacts.length} />
                    ) : ('')}

                </Col>
                <Col flex={10}>
                    <ConversationView id={selectedContact} />
                </Col>
            </Row>

        </Layout >
    );
}

export default Conversations;