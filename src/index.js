import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import List from './containers/List';
import Detail from './containers/Detail';

const { Header, Footer, Content } = Layout;

function App() {
    return (
      <BrowserRouter>
        <Layout style={{minWidth:'1000px'}}>
          <Header className="header">
            <AppHeader />
          </Header>
          <Content className="content">
              <Fragment>
                <Route path="/:id?" component={List} exact />
                <Route path="/detail" component={Detail}/>
              </Fragment>
          </Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </BrowserRouter>
    )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
