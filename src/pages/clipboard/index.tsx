import React from 'react';
import { Input, Button } from 'antd';
import SvgIcon from '@/icons';
import settings from './../../../config/defaultSettings';
import { clipboard } from '@/components/Clipboard';

class Clipboard extends React.Component {
  readonly inputValue: string = settings.github;
  handleClick() {
    clipboard(this.inputValue);
  }
  render() {
    return (
      <div>
        <h4>use clipboard</h4>
        <Input value={this.inputValue} style={{ width: '400px' }} />
        <Button onClick={() => this.handleClick()} type="primary">
          <SvgIcon icon="clipboard" />
          复制
        </Button>
        <hr />
        <Input.TextArea
          placeholder="Now you could paste you clipboard result here"
          style={{ width: '400px' }}
          autoSize={{ minRows: 6, maxRows: 10 }}
        />
      </div>
    );
  }
}

export default Clipboard;
