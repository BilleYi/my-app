import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Layout } from "antd"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Router from "./router"
import AppHeader from "./components/Header"
import AppFooter from "./components/Footer"
import Login from "./components/Login"
import store from "./store"
import "./utils/http"

const { Header, Footer, Content } = Layout

const App = function () {
  return (
    <BrowserRouter>
      <Layout style={{ minWidth: "1000px" }}>
        <Header className="header">
          <AppHeader />
          <Login />
        </Header>
        <Content className="content">
          <Provider store={store}>
            <Router />
          </Provider>
        </Content>
        <Footer className="footer">
          <AppFooter />
        </Footer>
      </Layout>
    </BrowserRouter>
  )
}

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
)
