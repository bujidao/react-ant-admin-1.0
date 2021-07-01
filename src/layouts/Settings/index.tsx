import React from 'react';
import { Drawer, Switch } from 'antd';
import styles from './index.less';
import store from '@/store/index';
import { setSettingVisible, toggleSideMenuLogo } from '@/store/app/index';
import SvgIcon from '@/icons/index';

interface settingsParams {
  visible: boolean;
}

class Settings extends React.Component<settingsParams, settingsParams> {
  constructor(props: settingsParams) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  onClose() {
    store.dispatch(setSettingVisible(false));
  }

  onOpenSetting() {
    store.dispatch(setSettingVisible(true));
  }

  handleToggleLogo(visible: any) {
    store.dispatch(toggleSideMenuLogo(visible));
  }

  render() {
    return (
      <>
        <div
          className={styles.openBtn}
          onClick={() => {
            this.onOpenSetting();
          }}
        >
          <SvgIcon icon="settings"></SvgIcon>
        </div>
        <Drawer
          title="系统布局配置"
          placement="right"
          closable={false}
          onClose={() => this.onClose()}
          visible={store.getState().app.settingVisible}
          bodyStyle={{
            overflowX: 'inherit',
          }}
        >
          <div className={styles.settingsItem}>
            <span>显示logo</span>
            <Switch defaultChecked onChange={this.handleToggleLogo} />
          </div>
        </Drawer>
      </>
    );
  }
}

export default Settings;
