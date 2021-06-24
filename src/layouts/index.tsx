import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';

const { Header, Sider, Content } = Layout;

import SideMenu from './SideMenu/index';
import Logo from './Logo/index';
import AppHeader from './AppHeader/index';
import AppMain from './AppMain/index';
import store from '../store/index';
import { toggleSideMenuState } from '../store/app/index';

interface AppParams {
  isSideMenuCollapsed: boolean;
}

class App extends React.Component<AppParams, AppParams> {
  unsubscribeId: any;

  constructor(props: any) {
    super(props);
    this.state = {
      isSideMenuCollapsed: store.getState().app.sideMenuState === 'collapsed',
    };
  }

  componentDidMount() {
    this.unsubscribeId = store.subscribe(() => {
      this.setState({
        isSideMenuCollapsed: store.getState().app.sideMenuState === 'collapsed',
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeId();
  }

  toggle = () => {
    store.dispatch(
      toggleSideMenuState(
        this.state.isSideMenuCollapsed ? 'open' : 'collapsed',
      ),
    );
  };

  render() {
    return (
      <Layout className={styles['app-container']}>
        {/* side menu */}
        <Sider
          className={styles['app-side']}
          trigger={null}
          collapsible
          collapsed={this.state.isSideMenuCollapsed} // 是否收起
          collapsedWidth="54"
        >
          <Logo collapsed={this.state.isSideMenuCollapsed} />
          <SideMenu />
        </Sider>
        {/* side menu end */}

        <Layout className="site-layout">
          {/* header navigation */}
          <Header className={styles['app-header']} style={{ padding: 0 }}>
            <AppHeader
              collapsed={this.state.isSideMenuCollapsed}
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
