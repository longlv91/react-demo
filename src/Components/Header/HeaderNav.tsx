import React from 'react';
import './HeaderNav.css';
import { Layout, Icon } from 'antd';

const { Header } = Layout;

class HeaderNav extends React.Component {

    state = {
        collapsed: false
    };

    constructor(props: any) {
        super(props);
        props.onClick.bind(this);
        this.setState({ collapsed: props.collapsed })
    }

    onClick(event: any) {
        console.log(event.component.props);
    }

    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.onClick}
                />
            </Header>
        )
    }
}

export default HeaderNav;