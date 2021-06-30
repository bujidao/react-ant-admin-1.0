import React from 'react';
import styles from './index.less';
import Corner from '@/components/Corner/index';
import settings from '../../../config/defaultSettings';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="dashboard">
        <Corner href={settings.github} className={styles.corner} size="40px" />
        <h1 className={styles.title}>dashboard</h1>
        <ul>
          <li>adf</li>
          <li>af</li>
          <li>111</li>
        </ul>
        <input
          type="text"
          aria-label="请输入"
          aria-required="true"
          name="namea"
          autoComplete="none"
        />
        <button aria-label="按钮" aria-required="true">
          按钮
        </button>
      </div>
    );
  }
}

export default App;
