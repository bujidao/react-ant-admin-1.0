import React from 'react';
import styles from './index.less';
import { history } from 'umi';
import { MenuItemType, MenuItemInfoType } from './index.d';
import classNames from 'classnames';
import routes from '@/routes/index';

import { ReactComponent as Logo } from '../../icons/svg/react.svg';

/**
 * menu list
 */
const menuList: Array<MenuItemType> = [];

/**
 * menu
 */
class MenuItem extends React.Component<MenuItemInfoType> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    history.push(this.props.itemInfo.linkTo);
  }

  render() {
    return (
      <li onClick={this.handleClick} className={styles['menu-item']}>
        {this.props.itemInfo.label}
      </li>
    );
  }
}

class AppHeader extends React.Component {
  constructor(props: any) {
    super(props);
    this.filterMenu(routes);
  }

  filterMenu(routes: any) {
    for (let route of routes) {
      if (route.hasOwnProperty('meta') && route.meta.isMenu) {
        menuList.push({
          label: route.meta.title,
          linkTo: route.path,
        });
      }
      if (route.hasOwnProperty('routes') && route.routes.length) {
        this.filterMenu(route.routes);
      }
    }
  }

  handleGoHome() {
    history.push('/');
  }

  render() {
    return (
      <nav className={classNames(styles.header)}>
        <div className={classNames(styles.logo)} onClick={this.handleGoHome}>
          <Logo width={90} height={120} className={styles.mylogo} />
        </div>
        <ul className={classNames(styles.menu)}>
          {menuList.map((item: any) => (
            <MenuItem itemInfo={item} key={item.linkTo} />
          ))}
        </ul>
      </nav>
    );
  }
}

export default AppHeader;
