import React, { useState } from 'react';
import styles from './index.less';
import { Card, Radio, Row, Col, Button } from 'antd';
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
  language: string;
  intl: any;
};

class I18n extends React.Component<I18nType> {
  unsubscribeId: any;

  constructor(props: any) {
    super(props);
    this.state = {
      language: store.getState().app.language,
    };
  }

  componentDidMount() {
    this.unsubscribeId = store.subscribe(() => {
      this.setState({
        language: store.getState().app.language,
      });
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
              defaultValue={this.props.language}
              onChange={this.handleLanguageChange}
            >
              <Radio.Button value="zh-CN">中文</Radio.Button>
              <Radio.Button value="en-US">English</Radio.Button>
            </Radio.Group>
          </Card>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Row>
            <Col span={12}>
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
            <Col span={12}></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default injectIntl(I18n);
