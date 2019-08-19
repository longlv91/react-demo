import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from 'antd';
import Navigation from './Components/Navigation/Navigation';
import HeaderNav from './Components/Header/HeaderNav';
import MainContent from './Components/MainContent/MainContent';

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
          </Layout>
        </Layout>
      </Router>

    );
  }
}

export default App;