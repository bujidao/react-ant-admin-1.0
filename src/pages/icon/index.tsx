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

/**
 * svg
 */
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

/**
 * antd
 */
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

/**
 * icon font
 */
class IconFontList extends React.Component {
  copyCode(element: any) {
    const copyText = `<span className="iconfont">${element}<span/>`;
    clipboard(copyText);
  }
  HTMLDecode(text: any) {
    var temp: any = document.createElement('div');
    temp.innerHTML = text;
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
  }
  render() {
    const iconList: any = [
      '&#xe651;',
      '&#xe6d3;',
      '&#xe643;',
      '&#xe648;',
      '&#xe6d5;',
      '&#xe61d;',
      '&#xe620;',
      '&#xe7ea;',
      '&#xe642;',
      '&#xe608;',
      '&#xe603;',
      '&#xe646;',
      '&#xe600;',
    ];
    return (
      <Row gutter={[16, 16]}>
        {iconList.map((item: any) => (
          <Col span={4} key={item.name}>
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
                <span
                  className="iconfont"
                  style={{ fontSize: 42, color: '#999' }}
                >
                  {this.HTMLDecode(item)}
                </span>
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
          <Tabs.TabPane
            tab={
              <span>
                <SvgIcon icon="antd" /> Iconfont图标
              </span>
            }
            key="4"
          >
            <IconFontList />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default IconPage;
