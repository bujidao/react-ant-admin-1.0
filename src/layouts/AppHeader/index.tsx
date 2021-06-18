import React from 'react';

import TiggerSide from './components/TiggerSide/index';
import BreadCrumb from './components/BreadCrumb/index';

type AppHeaderType = {
  collapsed: boolean;
  onTiggerSideClick: Function;
};

class AppHeader extends React.Component<AppHeaderType> {
  handleTiggerSideClick() {
    const { onTiggerSideClick } = this.props;
    onTiggerSideClick && onTiggerSideClick();
  }
  render() {
    return (
      <>
        <TiggerSide
          collapsed={this.props.collapsed}
          onClick={this.handleTiggerSideClick.bind(this)}
        />
        {/* <BreadCrumb /> */}
      </>
    );
  }
}

export default AppHeader;
