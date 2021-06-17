import React from 'react';

import AppHeader from './AppHeader';
import AppMain from './AppMain';
import AppFooter from './AppFooter';
import styles from './index.less';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <AppHeader />
        <div className={styles.main}>
          <AppMain children={this.props.children} />
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default App;
