import React from 'react';
import './Navigation.css';
import { Layout, Menu, Icon } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios';
import { DataService } from '../../Services/DataService';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface NavigationTypes {
    collapsed: boolean
}

type MenuDTO = {
    label: string;
    keyLang: string;
    icon: string;
    routerLink: string;
    order: string;
    hasChild: string;
    children: MenuDTO[];
}

class Navigation extends React.Component<NavigationTypes, any> {

    state: { menus: MenuDTO[] } = {
        menus: []
    };

    componentDidMount() {
        DataService.getMenus().then(response => {
            this.setState({ menus: response });
            this.forceUpdate();
        })
        .catch((error) => {
            this.setState({ menus: [] })
        })
    }

    render() {
        let  listItems = null;
        if (this.state.menus && this.state.menus.length > 0) {
            listItems = this.state.menus.map((menu, index) => {
                if (menu['hasChild']) {
                    const childItems = menu['children'].map((subMenu, i) => {
                        return (
                            <Menu.Item key={'sub-' + (index + 1) + i}>
                                <Link to={subMenu['routerLink']}>
                                    <Icon type={subMenu['icon']} />
                                    <span>{subMenu['label']}</span>
                                </Link>
                            </Menu.Item>
                        )
                    })
    
                    return (
                        <SubMenu
                            key={'sub-' + (index + 1)}
                            title={
                                <span>
                                    <Icon type={menu['icon']} />
                                    <span>{menu['label']}</span>
                                </span>
                            }
                        >
                            {childItems}
                        </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={index + 1}>
                            <Link to={menu['routerLink']}>
                                <Icon type={menu['icon']} />
                                <span>{menu['label']}</span>
                            </Link>
                        </Menu.Item>
                    )
                }
            });
        }
        
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed} className="navigation">
                <div className="logo" />
                <PerfectScrollbar>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {listItems}
                    </Menu>
                </PerfectScrollbar>

            </Sider>
        )
    }
}

export default Navigation;