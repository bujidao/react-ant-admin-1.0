import { ReactComponent } from '*.svg';
import React from 'react';
// import { ReactComponent as Logo } from './svg/react.svg'

// export default Logo

// import Logo from './svg/react.svg'

// const Logo

type SvgIconParams = {
  icon?: string;
};

class SvgIcon extends React.Component<SvgIconParams> {
  protected Icon: any;

  constructor(props: any) {
    super(props);
    // const pp = require('./svg/logo.svg').default
    // console.log(pp)
    // this.Icon = ReactComponent(pp)
  }

  render() {
    // import { ReactComponent as Logo } from './svg/react.svg'
    // import * as aa from './svg/react.svg'
    // aa.ReactComponent
    // const Icon = import('./svg/react.svg').ReactComponent
    // const Icon = this.Icon
    // const Icon = aa.ReactComponent
    // import { ReactComponent as Logo } from './svg/react.svg'
    // const Icon = import('./svg/react.svg')
    // Icon.Re
    const HugeA = import('./svg/react.svg').ReactComponent();
    const Icon = HugeA;
    return <Icon />;
  }
}

export default SvgIcon;
