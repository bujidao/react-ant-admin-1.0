import React, { useState } from 'react';
import styles from './index.less';
import { Card, Radio, Row, Col, Button, Input } from 'antd';
import { ReactComponent as Earth } from '../../icons/svg/earth.svg';
import store from '../../store/index';
import { toggleLanguage } from '@/store/app/index';
import { injectIntl } from 'umi';

type CardTitleType = {
  intl: any;
};

class CardTitle extends React.Component<CardTitleType> {
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
      React.createElement(
        'span',
        null,
        this.props.intl.formatMessage({
          id: 'app.switchLanguage',
        }),
      ),
    );
  }
}

type I18nType = {
  intl: any;
};

class I18n extends React.Component<I18nType> {
  unsubscribeId: any;

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.unsubscribeId = store.subscribe(() => {
      this.setState({});
    });
  }

  componentWillUnmount() {
    this.unsubscribeId();
  }

  handleLanguageChange(e: any) {
    store.dispatch(toggleLanguage(e.target.value));
  }

  render() {
    const Title = injectIntl(CardTitle);
    return (
      <div className={styles['i18n-container']}>
        <div style={{ textAlign: 'center' }}>
          <Card
            title={<Title />}
            style={{ width: '50%', display: 'inline-block' }}
          >
            <Radio.Group
              defaultValue={store.getState().app.language}
              onChange={this.handleLanguageChange}
            >
              <Radio.Button value="zh-CN">中文</Radio.Button>
              <Radio.Button value="en-US">English</Radio.Button>
            </Radio.Group>
            <Input
              style={{
                marginTop: '20px',
              }}
              disabled
              size="small"
              placeholder="本项目国际化根据umi自带locale插件"
            />
          </Card>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Row>
            <Col span={24}>
              <Button type="default">
                {this.props.intl.formatMessage({
                  id: 'button.default',
                })}
              </Button>
              <Button type="dashed">
                {this.props.intl.formatMessage({
                  id: 'button.dashed',
                })}
              </Button>
              <Button type="primary">
                {this.props.intl.formatMessage({
                  id: 'button.primary',
                })}
              </Button>
              <Button danger>
                {this.props.intl.formatMessage({
                  id: 'button.danger',
                })}
              </Button>
            </Col>
            <Col span={24}></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default injectIntl(I18n);
