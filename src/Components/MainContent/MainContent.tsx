import React from 'react';
import './MainContent.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from '../../Pages/HomePage/HomePage';
import LoginPage from '../../Pages/LoginPage/LoginPage';

const { Content } = Layout;

class MainContent extends React.Component {

    render() {
        return (
            <Content
                className="main-content"
            >
                <Route path="/" exact component={HomePage} />
                <Route path="/home/" component={HomePage} />
                <Route path="/login/" component={LoginPage} />
            </Content>

        )
    }
}

export default MainContent;