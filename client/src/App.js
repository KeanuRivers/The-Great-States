import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <ApolloProvider client={client}>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={[
              {
                key: "/",
                label: "Home",
              },
              {
                key: "/login",
                label: "Login",
              },
            ]}
            onClick={({ key }) => {
              document.location.replace(key);
            }}
          />
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
            }}
          >
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>

    </ApolloProvider>
  );
}

export default App;
