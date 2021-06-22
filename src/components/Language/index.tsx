import React from 'react';
import { Menu, Dropdown } from 'antd';
import { ReactComponent as LanguageIcon } from '@/icons/svg/language.svg';
import classNames from 'classnames';
import styles from './index.less';
import store from '@/store';
import { toggleLanguage } from '@/store/app/index';
import { languageList } from '@/locales/index';

// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//         3rd menu item
//       </a>
//     </Menu.Item>
//   </Menu>
// );

type LanguageListType = {
  languageList: any;
  onLanguageSelect: Function;
};

class LanguageList extends React.PureComponent<LanguageListType> {
  constructor(props: any) {
    super(props);
  }

  handleClick(row: any) {
    this.props.onLanguageSelect && this.props.onLanguageSelect(row);
  }

  render() {
    return (
      <Menu>
        {this.props.languageList &&
          this.props.languageList.map((item: any) => (
            <Menu.Item onClick={() => this.handleClick(item)} key={item.key}>
              {item.label}
            </Menu.Item>
          ))}
      </Menu>
    );
  }
}

type LanguageType = {
  className?: any;
};

class Language extends React.Component<LanguageType> {
  handleSelectLanguage() {}

  onLanguageSelect(row: any) {
    store.dispatch(toggleLanguage(row.key));
  }

  render() {
    const menu = (
      <LanguageList
        languageList={languageList}
        onLanguageSelect={this.onLanguageSelect.bind(this)}
      />
    );
    return React.createElement(
      Dropdown,
      {
        overlay: menu,
        placement: 'bottomLeft',
        arrow: true,
        trigger: ['click'],
      },
      React.createElement(
        LanguageIcon,
        {
          className: classNames(
            'svg-icon',
            this.props.className,
            styles.language,
          ),
          onClick: () => this.handleSelectLanguage(),
        },
        null,
      ),
    );
  }
}

export default Language;
