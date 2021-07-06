import React from 'react';
import { Table, Tag, Space, Button, Input, Select } from 'antd';
import styles from './index.less';

import { getArticleList } from '@/api/article';

type TheTableType = {
  dataList: any;
  filter: any;
};

class TheTable extends React.Component<TheTableType, TheTableType> {
  readonly columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Title',
      key: 'title',
      render: (row: any, record: any) => (
        <>
          <a>{row.title}</a>
          <Tag color="processing">{row.city}</Tag>
        </>
      ),
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'State',
      key: 'state',
      render: (row: any, record: any) => (
        <Space size="middle">
          {row.state ? (
            <Tag color="green">已发布</Tag>
          ) : (
            <Tag color="default">草稿</Tag>
          )}
        </Space>
      ),
    },
    {
      title: 'star',
      key: 'star',
      dataIndex: 'star',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (row: any, record: any) => (
        <Space size="middle">
          <Button type="primary">查看</Button>
          <Button danger>删除</Button>
        </Space>
      ),
    },
  ];

  constructor(props: any) {
    super(props);
    this.fitchData = this.fitchData.bind(this);
    this.fitchData();
    this.state = {
      dataList: [],
      filter: {
        keywords: '',
        city: '',
      },
    };
  }

  fitchData() {
    getArticleList().then((res) => {
      this.setState({
        dataList: res.data.list,
      });
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            marginBottom: '20px',
          }}
        >
          <Input
            style={{
              width: '200px',
            }}
            placeholder="标题"
          />
          <Select defaultValue="true" style={{ width: 120 }}>
            <Select.Option value="true">已发布</Select.Option>
            <Select.Option value="false">草稿</Select.Option>
          </Select>
          <Button type="primary">查询</Button>
        </div>
        <Table
          dataSource={this.state.dataList}
          columns={this.columns}
          bordered={true}
          rowKey="id"
        ></Table>
      </div>
    );
  }
}

export default TheTable;
