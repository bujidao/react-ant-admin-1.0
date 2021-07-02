import React from 'react';
import screenfull from 'screenfull';
import SvgIcon from '@/icons';
import classNames from 'classnames';
import styles from './index.less';
import { message } from 'antd';
import { injectIntl } from 'umi';

interface ScreenfullParams {
  className?: any;
  intl: any;
}
class Screenfull extends React.Component<ScreenfullParams> {
  state = {
    isFullscreen: false,
  };
  toggleScreenfull() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
      screenfull.on('change', () => {
        this.setState({
          isFullscreen: screenfull.isFullscreen,
        });
      });
    } else {
      message.error(
        this.props.intl.formatMessage({
          id: 'app.noSupportScreenfull',
        }),
      );
    }
  }
  render() {
    return (
      <span
        className={classNames(styles.screenfull, this.props.className)}
        onClick={() => this.toggleScreenfull()}
      >
        <SvgIcon
          icon={this.state.isFullscreen ? 'exit-screenfull' : 'screenfull'}
        />
      </span>
    );
  }
}

export default injectIntl(Screenfull);
