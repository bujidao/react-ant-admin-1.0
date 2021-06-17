import React from 'react';
import classNames from 'classNames';
import './index.less';
// import logo from "./svg/logo.svg";

// import classNames from "classnames";
// import * as React from "react";
// import "./index.scss";
// export const SvgIcon = props => {
//   const { className, url, ...etc } = props;
//   return (
//     <svg {...etc} className={classNames("SvgIcon", className)}>
//       {/* <use xlinkHref={url} /> */}
//       <use href={url} />
//     </svg>
//   );
// };

// .SvgIcon {
//   width: 24px;
//   height: 24px;
//   vertical-align: middle;
// }

type SvgIconParams = {
  icon?: string;
};

class SvgIcon extends React.Component<SvgIconParams> {
  protected icon: string;
  protected className?: string;

  constructor(props: any) {
    super(props);
    const { icon, className } = props;
    this.icon = icon;
    this.className = className;
    this.importIcons();
  }

  importIcons() {
    const importAll = (requireContext: any) =>
      requireContext.keys().forEach(requireContext);
    // const req = require.context('./svg', false, /\.svg$/)
    try {
      importAll(require.context('../svg', true, /\.svg$/));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <svg className={classNames('svg-icon', this.className)}>
        <use xlinkHref={'#' + this.props.icon} />
        {/* <use xlinkHref={'./svg/'+this.icon+'.svg'} /> */}
        {/* <use href={'./svg/'+this.icon+'.svg'} /> */}
      </svg>
    );
  }
}

export default SvgIcon;
