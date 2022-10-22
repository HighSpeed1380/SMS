import { Row, Col } from "antd";
import { useSelector } from "react-redux";

import './Conversations.scss';

const ConversationView = ({ id }) => {
    const chatHistory = useSelector(state => state.conversation.chatHistory[id]);
    const contact = useSelector(state => state.conversation.contacts[id]);

    if (!chatHistory) {
        return (
            <p className="no-selected-contact">Select a conversation from the list.</p>
        );
    }
    return (
        <div className="conversation-view">
            <Row className="conversation-view-header" justify="space-between">
                <Col>
                    <div>{contact.name}</div>
                    <div>{contact.number}</div>
                </Col>
            </Row>
            <div className="conversation-list">
                {chatHistory.length ? (
                    <p className="no-message">There are no messages in this conversation</p>
                ) : (
                    'ssd'
                )}
            </div>
            <Row className="conversation-composer">
                send
            </Row>
        </div>
    );
}

export default ConversationView;