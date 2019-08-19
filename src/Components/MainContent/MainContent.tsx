import React from 'react';
import './MainContent.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from '../../Pages/HomePage/HomePage';
import LoginPage from '../../Pages/LoginPage/LoginPage';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';

const { Content } = Layout;

const routes = [
    {
        path: "/",
        exact: true,
        main: HomePage
    },
    {
        path: "/home",
        main: HomePage
    },
    {
        path: "/login",
        main: LoginPage
    },
    {
        main: NotFoundPage
    }
];

class MainContent extends React.Component {

    render() {
        return (
            <Content
                className="main-content"
            >
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </Content>

        )
    }
}

export default MainContent;