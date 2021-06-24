import React from 'react';
import { Menu, Dropdown } from 'antd';
import { ReactComponent as LanguageIcon } from '@/icons/svg/language.svg';
import classNames from 'classnames';
import styles from './index.less';
import store from '@/store';
import { toggleLanguage } from '@/store/app/index';
import { languageList } from '@/locales/index';
import { setUserLogout } from '@/store/user/index';
import { history, Link, injectIntl } from 'umi';

interface MenuListParams {
  intl: any;
}

class MenuList extends React.PureComponent<MenuListParams> {
  handleLoginOut() {
    store.dispatch(setUserLogout());
    history.replace('/');
  }

  render() {
    const { intl } = this.props;
    return (
      <Menu selectable selectedKeys={[store.getState().app.language]}>
        <Menu.Item onClick={() => this.handleLoginOut()} key="logout">
          {intl.formatMessage({
            id: 'login.logout',
          })}
        </Menu.Item>
        <Menu.Item key="github">
          <a
            href="https://github.com/bujidao/react-ant-admin-1.0"
            target="_blank"
          >
            Github
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

class UserAvatar extends React.Component {
  handleSelectLanguage() {}

  onLanguageSelect(row: any) {
    store.dispatch(toggleLanguage(row.key));
  }

  render() {
    const menu = injectIntl(MenuList);
    // const menu = (
    //   <MenuList />
    // );
    return React.createElement(
      'div',
      {
        className: styles['avatar-menu'],
      },
      React.createElement(
        Dropdown,
        {
          overlay: menu,
          placement: 'bottomLeft',
          arrow: true,
          trigger: ['click'],
        },
        React.createElement('div', {
          className: classNames(styles.avatar),
          style: {
            backgroundImage: 'url(' + store.getState().user.avatar + ')',
          },
        }),
      ),
    );
  }
}

export default UserAvatar;
