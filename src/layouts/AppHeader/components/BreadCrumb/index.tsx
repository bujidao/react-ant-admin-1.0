import React from 'react';
import { Breadcrumb } from 'antd';

import styles from './index.less';
import routes from '../../../../routes/index';

class BreadCrumb extends React.Component {
  constructor(props: any) {
    super(props);
    this.flattenRoutes = this.flattenRoutes.bind(this);
    this.getBreadcrumbs = this.getBreadcrumbs.bind(this);

    let flattenRoutesList = this.flattenRoutes(routes);
    let location = window.location;
    console.log(location);

    this.getBreadcrumbs(flattenRoutesList, location);
  }

  flattenRoutes(arr: any) {
    return arr.reduce((prev: any = [], item: any) => {
      return prev.concat(
        Array.isArray(item.routes) ? this.flattenRoutes(item.routes) : item,
      );
    }, []);
  }

  getBreadcrumbs(flattenRoutes: Array<any>, location: any) {
    // 初始化匹配数组match
    let matches = [];
  }

  render() {
    return (
      <div className={styles['breadcrumb-wrapper']}>
        {/* <Breadcrumb itemRender={this.itemRender} routes={breadcrumb}> */}
        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
        {/* </Breadcrumb> */}
      </div>
    );
  }
}

export default BreadCrumb;
