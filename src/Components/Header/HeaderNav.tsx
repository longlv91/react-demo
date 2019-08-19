import React from 'react';
import './HeaderNav.css';
import { Layout, Icon } from 'antd';

const { Header } = Layout;
interface HeaderNavTypes {
    collapsed: boolean,
    changeStatus: Function
}

class HeaderNav extends React.Component<HeaderNavTypes, {}> {

    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={()=> this.props.changeStatus()}
                />
            </Header>
        )
    }
}

export default HeaderNav;