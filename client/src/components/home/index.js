import React, { useState } from 'react';
import './index.css';
import {
  DesktopOutlined,
  HomeOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Account', '3'),
    getItem('My Comments', '4'),
    getItem('My Favoriets', '5'),
    getItem('My Likes', '6'),
  ]),
  getItem('States', 'sub2', <HomeOutlined />, [getItem('Arizona', '7'), getItem('Florida', '8'), getItem('Geogria', '9'), getItem('New Mexico', '10'),  getItem('Nevada', '11'), getItem('New Jersey', '12'), getItem('Rhode Island', '13'),  getItem('Texas', '14'), getItem('Washington', '15'), getItem('Wisconsin', '16')]),
  getItem('Loggout', '17', <LogoutOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(1).fill(null).map((_, index) => {
              const key = index + 10;
              return {
                key,
                label: `Welcome To the Great States! ${key}`,
              };
            })}
          />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Welcome to the greatest place to learn about some of the best place to vist if your thinking about visting traveling the US. 
            <br />
            Here you'll read a few short summarys of some of the Best States we've come across !
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>The Great states</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;