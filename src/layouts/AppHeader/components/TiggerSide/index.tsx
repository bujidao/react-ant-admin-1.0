import React from 'react';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import './index.less';

type TiggerSideType = {
  collapsed: boolean;
  onClick: Function;
};

class TiggerSide extends React.Component<TiggerSideType> {
  handleClick() {
    const { onClick } = this.props;
    onClick && onClick();
  }

  render() {
    return React.createElement(
      this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
      {
        className: 'trigger',
        onClick: this.handleClick.bind(this),
      },
    );
  }
}

export default TiggerSide;
