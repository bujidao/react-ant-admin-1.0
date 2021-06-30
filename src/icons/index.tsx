import React from 'react';
import { ReactSVG } from 'react-svg';
import classnames from 'classnames';
import styles from './index.less';

type SvgIconParams = {
  icon: string;
  className?: string;
};

class SvgIcon extends React.Component<SvgIconParams> {
  render() {
    return (
      <ReactSVG
        src={require(`./svg/${this.props.icon}.svg`)}
        className={classnames(styles.svgIcon, this.props.className)}
        wrapper="div"
      />
    );
  }
}

export default SvgIcon;
