import React from 'react';
import styles from './index.less';
import classNames from 'classnames';

class Loading extends React.Component {
  render() {
    return (
      <div className={styles.loading}>
        <div className={classNames(styles.circle, styles.neumorphism)}>
          <div
            className={classNames(styles.circleInner, styles.neumorphismInset)}
          >
            Loading...
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
