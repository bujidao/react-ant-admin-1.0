import React from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import styles from './index.less';

import routes from '@/routes/index';

class SideMenu extends React.Component {
  constructor(props: any) {
    super(props);
  }

  getMenus(routes: any) {
    let menuList: Array<any> = [];
    for (let route of routes) {
      if (
        route.hasOwnProperty('meta') &&
        route.meta.hasOwnProperty('isMenu') &&
        route.meta.isMenu
      ) {
        menuList.push(
          <Menu.Item
            key={route.path}
            onClick={() => history.push(route.path)}
            icon={<UserOutlined />}
          >
            {route.meta.title}
          </Menu.Item>,
        );
      }
      if (route.hasOwnProperty('routes') && route.routes.length) {
        menuList.push(
          <Menu.SubMenu icon={<UserOutlined />} title={route.meta.title || ''}>
            {this.getMenus(route.routes)}
          </Menu.SubMenu>,
        );
      }
    }
    return menuList;
  }

  render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/']}
        className={styles.menu}
      >
        {this.getMenus(routes[0].routes)}
      </Menu>
    );
  }
}

export default SideMenu;
