import React, { Component } from 'react';
import styles from './index.less';
import { Card, Radio, Row, Col, Button } from 'antd';
import { ReactComponent as Earth } from '../../icons/svg/earth.svg';
import store from '../../store/index';

class CardTitle extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      {
        style: {
          textAlign: 'left',
        },
      },
      React.createElement(
        Earth,
        {
          style: {
            height: '1em',
            width: '1em',
            marginRight: '0.5em',
            position: 'relative',
            top: '.1em',
          },
        },
        null,
      ),
      React.createElement('span', null, '切换语言'),
    );
  }
}

type I18nType = {
  language: string;
};

class I18n extends React.Component<I18nType, I18nType> {
  constructor(props: any) {
    super(props);
    this.state = {
      language: 'zh-CN',
    };
  }
  componentDidMount() {
    this.handleLanguageSubscribe();
  }

  handleLanguageChange(e: any) {
    store.dispatch({
      type: 'change_language',
      language: e.target.value,
    });
  }

  handleLanguageSubscribe = () => {
    store.subscribe(() => {
      const language = store.getState().languageReducer.language;
      this.setState({
        language: language,
      });
    });
  };

  render() {
    return (
      <div className={styles['i18n-container']}>
        <div style={{ textAlign: 'center' }}>
          <div>adasds</div>
          <Card
            title={<CardTitle />}
            style={{ width: '50%', display: 'inline-block' }}
          >
            <Radio.Group
              defaultValue={this.state.language}
              onChange={this.handleLanguageChange}
            >
              <Radio.Button value="zh-CN">中文</Radio.Button>
              <Radio.Button value="en-EU">English</Radio.Button>
              <Radio.Button value="en-EU2">{this.state.language}</Radio.Button>
            </Radio.Group>
          </Card>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Row>
            <Col span={12}>
              <Button type="default">默认按钮</Button>
              <Button type="dashed">虚线按钮</Button>
              <Button type="primary">主要按钮</Button>
              <Button danger>危险按钮</Button>
            </Col>
            <Col span={12}></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default I18n;
