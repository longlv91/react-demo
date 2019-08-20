import React from 'react';
import './MainContent.css';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router';
import PerfectScrollbar from 'react-perfect-scrollbar';
import routes from '../../Routing/Routers';

const { Content } = Layout;

class MainContent extends React.Component {

    render() {
        return (
            <Content
                className="main-content"
            >
                <PerfectScrollbar>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </Switch>
                </PerfectScrollbar>
            </Content>

        )
    }
}

export default MainContent;