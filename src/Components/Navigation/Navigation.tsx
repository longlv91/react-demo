import React from 'react';
import './Navigation.css';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Link } from "react-router-dom";

const { Sider } = Layout;

interface NavigationTypes {
    collapsed: boolean
}

class Navigation extends React.Component<NavigationTypes, {}> {

    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="user" />
                            <span>Home Page</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/dashboard">
                            <Icon type="video-camera" />
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/login"><Icon type="upload" />
                            <span>Login</span></Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default Navigation;