import React from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
import { UserOutlined } from '@ant-design/icons';

import styles from './index.less';

import routes from '@/routes/index';

type SideMenuType = {
  displayRoutes: Array<any>;
};

class SideMenu extends React.Component<any, SideMenuType> {
  constructor(props: any) {
    super(props);
    this.generateRoutes = this.generateRoutes.bind(this);
    this.state = {
      displayRoutes: this.generateRoutes(routes[0].routes),
    };
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
      } else if (!route.hasOwnProperty('hidden') && !route.hidden) {
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

  // Filter out the routes that can be displayed in the sidebar
  // And generate the internationalized title
  generateRoutes(routes: any) {
    let res: any = [];
    for (let route of routes) {
      if (route.hidden) {
        continue;
      }

      if (route.routes) {
        const tempRoutes = this.generateRoutes(route.routes);
        if (tempRoutes.length >= 1) {
          res.push({
            ...route,
            routes: tempRoutes,
          });
        }
      } else {
        res.push(route);
      }
    }
    return res;
  }

  render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/']}
        className={styles.menu}
      >
        {this.getMenus(this.state.displayRoutes)}
      </Menu>
    );
  }
}

export default SideMenu;
