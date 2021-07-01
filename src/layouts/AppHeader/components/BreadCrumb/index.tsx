import React from 'react';
import { Breadcrumb } from 'antd';
import styles from './index.less';
import store from '@/store';
import { injectIntl } from 'umi';

interface BreadCrumbParams {
  intl: any;
}

class BreadCrumb extends React.Component<BreadCrumbParams> {
  unsubscribeId: any;

  componentDidMount() {
    this.unsubscribeId = store.subscribe(() => {
      this.setState({});
    });
  }

  formatRouteInfo(route: any) {
    let label: string = '';
    if (route.path === '/') {
      label = this.props.intl.formatMessage({
        id: 'app.dashboard',
      });
    } else {
      if (route.meta && route.meta.title) {
        label = this.props.intl.formatMessage({
          id: 'app.' + route.meta.title,
        });
      } else {
        label = route.path.replace('/', '');
      }
    }
    return {
      label: label,
      link: route.path,
    };
  }

  render() {
    return (
      <div className={styles['breadcrumb-wrapper']}>
        <Breadcrumb>
          {store.getState().app.pageRoutes &&
            store
              .getState()
              .app.pageRoutes.map((route: any) => (
                <Breadcrumb.Item key={route.route.path}>
                  {this.formatRouteInfo(route.route).label}
                </Breadcrumb.Item>
              ))}
        </Breadcrumb>
      </div>
    );
  }

  componentWillUnmount() {
    this.unsubscribeId();
  }
}

export default injectIntl(BreadCrumb);
