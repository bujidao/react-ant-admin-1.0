import React from 'react';
import { Upload, message, Table } from 'antd';
import XLSX from 'xlsx';
import axios from 'axios';
import { any } from '@umijs/deps/compiled/@hapi/joi';

interface ReacExcelState {
  tableData: any;
  columns: any;
}

class ReadExcel extends React.Component<any, ReacExcelState> {
  constructor(props: any) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      tableData: [],
      columns: [],
    };
  }
  getBase64(img: any, callback: Function) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  // tableData: any = []
  // columns: any = [
  //   {
  //     dataIndex: "Title",
  //     key: "Title",
  //     title: "Title",
  //   }
  // ]
  handleOnChange(info: any) {
    this.getBase64(info.file.originFileObj, (fileUrl: any) => {
      axios
        .request({
          url: fileUrl,
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          responseType: 'arraybuffer',
        })
        .then((res: any) => {
          let data = new Uint8Array(res.data);
          let wb = XLSX.read(data, { type: 'array' });
          let sheets = wb.Sheets;
          var content: any = [];
          for (let key in sheets) {
            content[key] = XLSX.utils.sheet_to_json(sheets[key]);
          }
          const tmpTableData = Object.assign([], content['Sheet1']);
          const tmpColumns = [];
          for (let key of Object.keys(tmpTableData[0])) {
            tmpColumns.push({
              title: key,
              dataIndex: key,
              key: key,
            });
          }
          this.setState({
            tableData: tmpTableData,
            columns: tmpColumns,
          });
        });
    });
    const { status } = info.file;
    if (status === 'done') {
      message.success(`${info.file.name} 上传成功.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} 上传失败`);
    }
  }

  render() {
    return (
      <div>
        <Upload.Dragger
          onChange={this.handleOnChange}
          name="file"
          multiple={false}
        >
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Upload.Dragger>
        <Table
          dataSource={this.state.tableData}
          columns={this.state.columns}
          rowKey="Date"
          bordered={true}
        ></Table>
      </div>
    );
  }
}

export default ReadExcel;
