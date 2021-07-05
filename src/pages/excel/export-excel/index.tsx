import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import { getArticleList } from '@/api/article';

type ExportExcelProps = {
  dataList: any;
};

class ExportExcel extends React.Component<ExportExcelProps, ExportExcelProps> {
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

  exportExcel = () => {
    const cloneDivNode = document
      .querySelector('.ant-table-container table')
      .cloneNode(true);
    const table = document.createElement('table');
    table.appendChild(cloneDivNode);
    table.setAttribute('id', 'table-to-xls');
    document.getElementById('root').appendChild(table);
    document.getElementById('test-table-xls-button').click();
    setTimeout(() => {
      document.getElementById('root').removeChild(table);
    }, 500);
  };

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        Button,
        {
          onClick: this.exportExcel,
        },
        '导出当页',
      ),
      React.createElement(
        Table,
        {
          dataSource: this.state.dataList,
          columns: this.columns,
          bordered: true,
          rowKey: 'id',
          id: 'my-table',
        },
        null,
      ),
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="表格下载"
        sheet="sheet1"
        buttonText="Download as XLS"
      />,
    );
  }
}

export default ExportExcel;
