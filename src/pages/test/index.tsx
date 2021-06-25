import React from 'react';
import { Prompt, withRouter, Link, history } from 'umi';
import { Switch } from 'antd';

class Test extends React.Component {
  constructor(props: any) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }
  state = {
    showPrompt: false,
  };

  toggleSwitch(checked: boolean, event: Event) {
    this.setState({
      showPrompt: checked,
    });
  }

  render() {
    return (
      <div>
        <h2>umi api笔记</h2>
        <hr />
        <div className="module">
          <h3>Prompt</h3>
          提供一个用户离开页面时的提示选择。
          <Switch onClick={this.toggleSwitch} />
          {this.state.showPrompt ? '已打开Prompt' : '已关闭Prompt'}
          {this.state.showPrompt && <Prompt message="你确定要离开么？" />}
          <hr />
        </div>

        <div className="module">
          <h3>Link</h3>
          <Link to="/">首页</Link>
          <hr />
        </div>

        <div className="module">
          <h3>history</h3>
          <ul>
            <li>pathname:{history.location.pathname}</li>
            <li>search:{history.location.search}</li>
            <li>hash:{history.location.hash}</li>
          </ul>
          <hr />
        </div>

        <div className="module">
          <h3>其他测试</h3>
          <hr />
        </div>
      </div>
    );
  }
}

export default Test;
