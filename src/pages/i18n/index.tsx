import React from 'react';
import styles from './index.less';
import { Card, Radio, Row, Col, Button } from 'antd';
import { ReactComponent as Earth } from '../../icons/svg/earth.svg';
import store from '../../store/index';
import { toggleLanguage } from '@/store/app/index';
// import { useIntl } from 'umi';
import { useIntl } from 'react-intl';

class CardTitle extends React.Component {
  constructor(props: any) {
    super(props);

    // intl = useIntl()
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
    return (
      <div className={styles['i18n-container']}>
        <div style={{ textAlign: 'center' }}>
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
