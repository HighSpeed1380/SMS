import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./constants";
import { Layout } from "antd";

import Sidebar from "./components/sidebar/Sidebar";
import Conversations from "./components/conversations/Conversations";
import Profile from "./components/profile/Profile";
import CannedResponses from './components/cannedResponses/CannedResponses';
import Login from "./pages/login/Login";

const getRoutes = () => [
    {
        path: routes.welcomePage,
        element: <Navigate to={routes.loginPage} />
    },
    {
        path: routes.loginPage,
        element: <Login />
    },
    {
        path: "",
        element: (
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar />
                <Outlet />
            </Layout>
        ),
        children: [
            {
                path: routes.conversations,
                element: <Conversations />
            },
            {
                path: routes.contacts,
                element: <div>contact</div>
            },
            {
                path: routes.contactList,
                element: <div>contactList</div>
            },
            {
                path: routes.cannedResponses,
                element: <CannedResponses />
            },
            {
                path: routes.profile,
                element: <Profile />
            },
        ]
    }
];

export default getRoutes;