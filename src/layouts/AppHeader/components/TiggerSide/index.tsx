import React from 'react';
import styles from './index.less';

import { MenuFoldOutlined } from '@ant-design/icons';

import './index.less';

interface TiggerSideParams {
  collapsed: boolean;
  onClick: Function;
}

class TiggerSide extends React.Component<TiggerSideParams> {
  handleClick() {
    const { onClick } = this.props;
    onClick && onClick();
  }

  render() {
    return React.createElement(MenuFoldOutlined, {
      className: styles.trigger,
      onClick: this.handleClick.bind(this),
      style: {
        transform: `scaleX(${this.props.collapsed ? -1 : 1})`,
      },
    });
  }
}

export default TiggerSide;
