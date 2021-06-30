import React from 'react';
import SvgIcon from '@/icons/index';
import styles from './index.less';
import ReactMarkdown from 'react-markdown';
import md from './README.md';
import { Tabs, Row, Col, Card } from 'antd';

class SvgIconList extends React.Component {
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
      <Row gutter={[16, 16]}>
        {iconList.map((item: any) => (
          <Col span={4}>
            <Card
              hoverable
              size="small"
              title={item}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: 42, color: '#999' }}>
                <SvgIcon icon={item}></SvgIcon>
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
        <Tabs type="card" className={styles.cardContainer}>
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
            <div className="markdown-article">
              <ReactMarkdown>{md}</ReactMarkdown>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default IconPage;
