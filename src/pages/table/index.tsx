import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import styles from './index.less';

import { getArticleList } from '@/api/article';

type TheTableType = {
  dataList: any;
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
      dataIndex: 'title',
      key: 'title',
      render: (text: any) => (
        <>
          <a>{text}</a>
        </>
      ),
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'city',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text: any, record: any) => (
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
    return React.createElement(
      'div',
      null,
      React.createElement(
        Table,
        {
          dataSource: this.state.dataList,
          columns: this.columns,
          bordered: true,
          rowKey: 'id',
        },
        null,
      ),
    );
  }
}

export default TheTable;
