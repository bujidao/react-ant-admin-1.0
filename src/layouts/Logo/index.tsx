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
    return React.createElement(
      'div',
      {
        className: styles.logo,
      },
      React.createElement('img', {
        src: logo,
        className: styles.img,
        style: {
          marginRight: this.props.collapsed ? '0px' : '10px',
        },
      }),
      !this.props.collapsed &&
        React.createElement('span', null, settings.title),
    );
  }
}

export default Logo;
