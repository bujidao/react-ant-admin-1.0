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
    let iconPath: string;
    try {
      iconPath = require(`./svg/${this.props.icon}.svg`);
    } catch (e) {
      iconPath = require(`./svg/example.svg`);
    }
    return (
      <ReactSVG
        src={iconPath}
        className={classnames(styles.svgIcon, this.props.className)}
        wrapper="div"
      />
    );
  }
}

export default SvgIcon;
