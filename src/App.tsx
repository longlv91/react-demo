import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from 'antd';
import Navigation from './Components/Navigation/Navigation';
import HeaderNav from './Components/Header/HeaderNav';
import MainContent from './Components/MainContent/MainContent';
import AuthencationService from './Services/AuthenticationService';

const { Footer } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  constructor(props: any) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Navigation collapsed={this.state.collapsed} />
          <Layout>
            <HeaderNav collapsed={this.state.collapsed} changeStatus={this.toggle} />
            <MainContent />
            <Footer style={{ textAlign: 'center' }}>React Demo with Ant Design ©2019</Footer>
          </Layout>
        </Layout>
      </Router>

    );
  }
}

export default App;