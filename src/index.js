import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout } from 'antd';
import AppHeader from './components/Header';

const { Header, Footer, Content } = Layout;

function App() {
    return (
      <Layout style={{minWidth:'1000px'}}>
        <Header className="header">
          <AppHeader />
        </Header>
        <Content className="content">Content</Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
