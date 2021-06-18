import React from 'react';
import styles from './index.less';
import settings from '../../../config/defaultSettings';
import logoImg from '@/assets/logo.png';

interface LogoParams {
  collapsed: boolean;
}

class Logo extends React.Component<LogoParams> {
  render() {
    let logo: string;
    if (settings.hasOwnProperty('logo') && settings.logo) {
      logo = settings.logo;
    } else {
      logo = logoImg;
    }
    return (
      <div className={styles.logo}>
        <img
          src={logo}
          alt=""
          style={{
            marginRight: !this.props.collapsed ? '10px' : '0px',
          }}
        />
        {!this.props.collapsed && <span>{settings.title}</span>}
      </div>
    );
  }
}

export default Logo;
