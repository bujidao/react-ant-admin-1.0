import React from 'react';
import styles from './index.less';

class AppMain extends React.Component {
  render() {
    return <div className={styles['app-main']}>{this.props.children}</div>;
  }
}

export default AppMain;
