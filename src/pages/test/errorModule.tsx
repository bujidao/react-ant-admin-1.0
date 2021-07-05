import React from 'react';
import { Switch } from 'antd';

interface ErrorModuleParams {
  hasError: boolean;
}

class ErrorModule extends React.Component<any, ErrorModuleParams> {
  constructor(props: any) {
    super(props);
    this.toggleErrorFlag = this.toggleErrorFlag.bind(this);
    this.state = {
      hasError: true,
    };
  }
  toggleErrorFlag() {
    this.setState({
      hasError: !this.state.hasError,
    });
    throw new Error('I crashed!');
  }
  render() {
    return (
      <div className="module">
        <h3>ErrorBoundary</h3>
        错误测试模块
        <Switch onClick={this.toggleErrorFlag} />
        <br />
        当前状态是：【{this.state.hasError.toString()}】
        <hr />
      </div>
    );
  }
}

export default ErrorModule;
