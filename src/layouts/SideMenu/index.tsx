import React from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.less';
import store from '@/store';
import SvgIcon from '@/icons/index';

interface SideMenuTypeParams {
  displayRoutes: Array<any>;
  currentMenuSelect: string;
}

class SideMenu extends React.Component<any, SideMenuTypeParams> {
  readonly menuItemKeyPre: string = 'menu-item-key-';
  readonly submenuItemKeyPre: string = 'submenu-item-key-';
  protected storeSubscribe: any;

  constructor(props: any) {
    super(props);
    this.generateRoutes = this.generateRoutes.bind(this);
    this.state = {
      displayRoutes: [],
      currentMenuSelect: this.menuItemKeyPre + history.location.pathname,
    };
  }

  componentDidMount() {
    this.storeSubscribe = store.subscribe(() => {
      this.setState({
        displayRoutes: this.generateRoutes(store.getState().app.sideMenu),
      });
    });
  }

  getMenus(routes: any, isRootMenu: boolean = false) {
    let menuList: Array<any> = [];
    for (let route of routes) {
      if (route.hasOwnProperty('routes') && route.routes.length) {
        if (route.routes.length === 1) {
          menuList.push(
            <Menu.Item
              key={this.menuItemKeyPre + route.routes[0].path}
              onClick={() => this.handleMenuItemClick(route.routes[0])}
              icon={isRootMenu && <SvgIcon icon={route.routes[0].meta.icon} />}
              className={styles.menuItem}
            >
              {route.routes[0].meta.title}
            </Menu.Item>,
          );
        } else {
          menuList.push(
            <Menu.SubMenu
              icon={isRootMenu && <SvgIcon icon={route.meta.icon} />}
              key={this.submenuItemKeyPre + route.path}
              title={route.meta.title || ''}
              popupClassName={styles.menuSubItem}
            >
              {this.getMenus(route.routes)}
            </Menu.SubMenu>,
          );
        }
      } else if (!route.hasOwnProperty('hidden') && !route.hidden) {
        menuList.push(
          <Menu.Item
            key={this.menuItemKeyPre + route.path}
            onClick={() => this.handleMenuItemClick(route)}
            icon={isRootMenu && <SvgIcon icon={route.meta.icon} />}
            className={styles.menuItem}
          >
            {route.meta.title}
          </Menu.Item>,
        );
      }
    }
    return menuList;
  }

  handleMenuItemClick(route: any) {
    try {
      new URL(route.path);
      window.open(route.path);
    } catch (e) {
      history.push(route.path);
      this.setState({
        currentMenuSelect: this.menuItemKeyPre + history.location.pathname,
      });
    }
  }

  // Filter out the routes that can be displayed in the sidebar
  // And generate the internationalized title
  generateRoutes(routes: any) {
    let res: any = [];
    for (let route of routes) {
      if (route.hidden) {
        continue;
      }

      if (!route.path) {
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
        selectedKeys={[`${this.state.currentMenuSelect}`]}
      >
        {this.state.displayRoutes &&
          this.getMenus(this.state.displayRoutes, true)}
      </Menu>
    );
  }
}

export default SideMenu;
