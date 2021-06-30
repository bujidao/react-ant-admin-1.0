import React from 'react';
import styles from './index.less';
import classnames from 'classnames';

interface CornerInt {
  href: string;
  size?: string;
  className?: any;
  label?: string | number;
}

class Corner extends React.Component<CornerInt> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return React.createElement(
      'a',
      {
        href: this.props.href,
        className: classnames(styles.corner, this.props.className),
        style: {
          borderWidth: this.props.size || '50px',
        },
      },
      this.props.label,
    );
  }
}

export default Corner;
