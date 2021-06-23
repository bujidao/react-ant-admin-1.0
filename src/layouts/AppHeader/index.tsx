import React from 'react';

import TiggerSide from './components/TiggerSide/index';
import store from '@/store';
import Language from '@/components/Language/index';
import BreadCrumb from './components/BreadCrumb/index';
import styles from './index.less';

interface AppHeaderParams {
  collapsed: boolean;
  onTiggerSideClick: Function;
}

class AppHeader extends React.Component<AppHeaderParams> {
  state = {
    isSideMenuCollapsed: store.getState().app.sideMenu,
  };

  handleTiggerSideClick() {
    const { onTiggerSideClick } = this.props;
    onTiggerSideClick && onTiggerSideClick();
  }
  render() {
    return (
      <div className={styles.header}>
        <div>
          <TiggerSide
            collapsed={this.props.collapsed}
            onClick={this.handleTiggerSideClick.bind(this)}
          />
          <BreadCrumb />
        </div>
        <Language className={styles.icon} />
      </div>
    );
  }
}

export default AppHeader;
