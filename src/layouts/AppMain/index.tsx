import React from 'react';
import styles from './index.less';
import WaterMark from 'watermark-component-for-react';
import defaultSettings from '../../../config/defaultSettings';

class AppMain extends React.Component {
  render() {
    return React.createElement(
      WaterMark,
      {
        content: defaultSettings.title,
        style: {
          height: '100%',
        },
        globalAlpha: 0.005,
      },
      React.createElement(
        'div',
        {
          className: styles.appMain,
        },
        this.props.children,
      ),
    );
  }
}

export default AppMain;
