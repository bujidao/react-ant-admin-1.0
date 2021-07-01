import React from 'react';
import SvgIcon from '@/icons/index';
import styles from './index.less';
import ReactMarkdown from 'react-markdown';
import md from './README.md';
import { Tabs, Row, Col, Card } from 'antd';
import classNames from 'classnames';
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
} from '@ant-design/icons';
import { clipboard } from '@/components/Clipboard/index.ts';

class SvgIconList extends React.Component {
  copyCode(element: any) {
    const copyText = `
import SvgIcon from '@/icons/index';
<SvgIcon icon="${element}"></SvgIcon>
    `;
    clipboard(copyText);
  }
  render() {
    const iconList: any = [
      'admin',
      'book',
      'bug',
      'dashboard',
      'earth',
      'example',
      'icon',
      'language',
      'link',
      'list',
      'lock',
      'manage',
      'react',
      'table',
      'user-info',
      'user',
      '404',
    ];
    return (
      <>
        <Row gutter={[16, 16]}>
          {iconList.map((item: any) => (
            <Col span={4} key={item.toString()}>
              <Card
                hoverable
                size="small"
                title={item}
                style={{ textAlign: 'center' }}
              >
                <div
                  style={{ fontSize: 42, color: '#999' }}
                  onClick={() => this.copyCode(item)}
                >
                  <SvgIcon icon={item}></SvgIcon>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

class AntdIconList extends React.Component {
  copyCode(element: any) {
    const copyText = `
import {${element.name}} from '@ant-design/icons';
<${element.name}" />
    `;
    clipboard(copyText);
  }
  render() {
    const iconList: any = [
      {
        name: 'StepBackwardOutlined',
        component: StepBackwardOutlined,
      },
      {
        name: 'StepForwardOutlined',
        component: StepForwardOutlined,
      },
      {
        name: 'FastBackwardOutlined',
        component: FastBackwardOutlined,
      },
      {
        name: 'FastForwardOutlined',
        component: FastForwardOutlined,
      },
      {
        name: 'ShrinkOutlined',
        component: ShrinkOutlined,
      },
      {
        name: 'ArrowsAltOutlined',
        component: ArrowsAltOutlined,
      },
    ];
    return (
      <Row gutter={[16, 16]}>
        {iconList.map((item: any) => (
          <Col span={4} key={item.name}>
            <Card
              hoverable
              size="small"
              title={item.name}
              style={{ textAlign: 'center' }}
            >
              <div
                style={{ fontSize: 42, color: '#999' }}
                onClick={() => this.copyCode(item)}
              >
                <item.component />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

class IconPage extends React.Component {
  render() {
    return (
      <div className={styles.iconPage}>
        <Tabs type="card" className={classNames(styles.cardContainer)}>
          <Tabs.TabPane
            tab={
              <span>
                <SvgIcon icon="book" /> 说明文档
              </span>
            }
            key="1"
          >
            <div className="markdown-article">
              <ReactMarkdown>{md}</ReactMarkdown>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <SvgIcon icon="svg" /> SVG图标
              </span>
            }
            key="2"
          >
            <SvgIconList />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <SvgIcon icon="antd" /> Antd图标
              </span>
            }
            key="3"
          >
            <AntdIconList />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default IconPage;
