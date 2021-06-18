import React from 'react';
import { Table, Tag, Space } from 'antd';
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
      dateIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dateIndex: 'author',
      key: 'author',
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
      Table,
      {
        dataSource: this.state.dataList,
        columns: this.columns,
        bordered: true,
      },
      null,
    );
  }
}

export default TheTable;
