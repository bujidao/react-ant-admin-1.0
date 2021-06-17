import React from 'react';
import classNames from 'classNames';
import './index.less';

import { ReactComponent as MyLogo } from './svg/logo.svg';
console.log('MyLogo start');
console.log(MyLogo);
console.log('MyLogo end');

type SvgIconParams = {
  icon: string;
  className?: string;
};

class SvgIcon extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    // const {default: ReactComponent} = import('./svg/logo.svg')
    // import { ReactComponent as MyLogo } from './svg/logo.svg'
    // const {ReactComponent} = require('./svg/logo.svg')
    // const Icon = ReactComponent
    // console.log('Icon start')
    // console.log(Icon)
    // console.log('Icon end')
    import('./svg/logo.svg').then(({ default: ReactComponent }) => {
      console.log(ReactComponent);
    });
    return (
      <div>
        hi logo
        {/* <Icon /> */}
      </div>
    );
  }
}

export default SvgIcon;
