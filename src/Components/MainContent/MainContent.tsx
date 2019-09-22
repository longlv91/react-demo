import React from 'react';
import './MainContent.css';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router';
import PerfectScrollbar from 'react-perfect-scrollbar';
import routes from '../../Routing/Routers';
import AuthencationService from '../../Services/AuthenticationService';

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
                            (AuthencationService.isAuthorized || route.public) ?
                                (<Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />) :
                                (
                                    <Redirect
                                        key={index}
                                        to={{
                                            pathname: "/pages/authentication/login"
                                        }}
                                    />
                                )
                        ))}
                    </Switch>
                </PerfectScrollbar>
            </Content>
        )
    }
}

export default MainContent;