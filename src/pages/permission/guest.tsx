import React from 'react';

class PerimissionGuest extends React.Component {
  render() {
    return (
      <div>
        <h2>动态路由测试</h2>
        <p>只有权限为['admin', 'guest']才能看见这个页面</p>
      </div>
    );
  }
}
export default PerimissionGuest;
