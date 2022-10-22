import {
    FaSms,
    FaRegAddressBook,
    FaRegAddressCard
} from 'react-icons/fa';
import { RiReplyAllLine } from 'react-icons/ri';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import { routes } from '../../constants';

import './Sidebar.scss';

const getItem = (label, key, icon, children) => {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem(<Link className='link' to={routes.conversations}>Conversations</Link>, '1', <FaSms />),
    getItem('Contacts', 'sub1', <FaRegAddressBook />, [
        getItem(<Link className='link' to={routes.contacts}>Contacts</Link>, '3'),
        getItem(<Link className='link' to={routes.contactList}>Lists</Link>, '4'),
    ]),
    getItem(<Link className='link' to={routes.cannedResponses}>Canned Responses</Link>, '5', <RiReplyAllLine />),
    getItem(<Link className='link' to={routes.profile}>My Profile</Link>, '6', <FaRegAddressCard />),
];

const Sidebar = () => {

    return (
        <Layout.Sider>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Layout.Sider>
    );
}

export default Sidebar;