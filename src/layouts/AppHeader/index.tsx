import React from 'react';

import TiggerSide from './components/TiggerSide/index';
import store from '@/store';

type AppHeaderType = {
  collapsed: boolean;
  onTiggerSideClick: Function;
};

class AppHeader extends React.Component<AppHeaderType> {
  state = {
    isSideMenuCollapsed: store.getState().app.sideMenu,
  };

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
      </>
    );
  }
}

export default AppHeader;
