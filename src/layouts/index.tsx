import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import React from 'react';

import styles from './index.less';

const { Header, Sider, Content } = Layout;

import SideMenu from './SideMenu/index';
import Logo from './Logo/index';
import AppHeader from './AppHeader/index';
import AppMain from './AppMain/index';

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className={styles['app-container']}>
        <Sider
          className={styles['app-side']}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          collapsedWidth="54"
        >
          <Logo collapsed={this.state.collapsed} />
          <SideMenu />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              },
            )}
          </Header>
          {/* <Header>
            <AppHeader />
          </Header> */}
          <Content>
            <AppMain children={this.props.children} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
