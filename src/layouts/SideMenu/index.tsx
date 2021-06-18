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
      if (route.hasOwnProperty('routes') && route.routes.length) {
        if (route.routes.length === 1) {
          menuList.push(
            <Menu.Item
              key={'menu-item-' + route.routes[0].path}
              onClick={() => history.push(route.routes[0].path)}
              icon={<UserOutlined />}
            >
              {route.routes[0].meta.title}
            </Menu.Item>,
          );
        } else {
          menuList.push(
            <Menu.SubMenu
              icon={<UserOutlined />}
              key={'sub-menu-' + route.path}
              title={route.meta.title || ''}
            >
              {this.getMenus(route.routes)}
            </Menu.SubMenu>,
          );
        }
      } else if (
        route.hasOwnProperty('meta') &&
        route.meta.hasOwnProperty('isMenu') &&
        route.meta.isMenu
      ) {
        menuList.push(
          <Menu.Item
            key={'menu-item-' + route.path}
            onClick={() => history.push(route.path)}
            icon={<UserOutlined />}
          >
            {route.meta.title}
          </Menu.Item>,
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
