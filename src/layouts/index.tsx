import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';

const { Header, Sider, Content } = Layout;

import SideMenu from './SideMenu/index';
import Logo from './Logo/index';
import AppHeader from './AppHeader/index';
import AppMain from './AppMain/index';
import store from '../store/index';
import { toggleSideMenu } from '../store/app/index';

class App extends React.Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    this.setState({
      collapsed: !store.getState().app.sideMenu,
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    store.dispatch(toggleSideMenu(this.state.collapsed));
  };

  render() {
    return (
      <Layout className={styles['app-container']}>
        {/* side menu */}
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
        {/* side menu end */}
        <Layout className="site-layout">
          {/* header navigation */}
          <Header className={styles['app-header']} style={{ padding: 0 }}>
            <AppHeader
              collapsed={this.state.collapsed}
              onTiggerSideClick={this.toggle}
            />
          </Header>
          {/* header navigation end */}

          {/* main body */}
          <Content>
            <AppMain children={this.props.children} />
          </Content>
          {/* main body end */}
        </Layout>
      </Layout>
    );
  }
}

export default App;
