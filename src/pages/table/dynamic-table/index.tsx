import React from 'react';
import { Table, Tag, Space, Button, Checkbox } from 'antd';
import styles from './index.less';

import { getArticleList } from '@/api/article';

type TheTableType = {
  dataList: any;
  filter: any;
  columns: any;
};

class TheTable extends React.Component<TheTableType, TheTableType> {
  checkBoxOptions = [
    { label: 'Author', value: 'Author' },
    { label: 'State', value: 'State' },
    { label: 'star', value: 'star' },
  ];

  constructor(props: any) {
    super(props);
    this.fitchData = this.fitchData.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.fitchData();
    this.state = {
      dataList: [],
      filter: {
        keywords: '',
        city: '',
      },
      columns: [
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
      ],
    };
  }

  fitchData() {
    getArticleList().then((res) => {
      this.setState({
        dataList: res.data.list,
      });
    });
  }

  onCheckboxChange(list: any) {
    const unselect = this.checkBoxOptions.filter((option: any) => {
      if (list.indexOf(option.value) == -1) {
        return true;
      }
    });
    const selectArr: any = [];
    unselect.forEach((item: any) => {
      selectArr.push(item.value);
    });
    const aa = this.state.columns.filter((column: any) => {
      if (selectArr.indexOf(column.title) == -1) {
        return true;
      }
    });
    this.setState({
      columns: aa,
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
          <Checkbox.Group
            options={this.checkBoxOptions}
            defaultValue={['Author']}
            onChange={this.onCheckboxChange}
          />
        </div>
        <Table
          dataSource={this.state.dataList}
          columns={this.state.columns}
          bordered={true}
          rowKey="id"
        ></Table>
      </div>
    );
  }
}

export default TheTable;
