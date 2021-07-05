import React from 'react';
import PdfReviewer from '@/components/PdfReviewer';
import styles from './index.less';
import { Row, Col, Input, Card, Upload } from 'antd';

interface PdfState {
  file: string;
}

class Pdf extends React.Component<any, PdfState> {
  constructor(props: any) {
    super(props);
    this.state = {
      file: 'http://reptic-crla.collanaud.qc.ca/ESL/wp-content/uploads/2014/03/Simple-Present-Tense-Booklet-Tutee.pdf',
    };
    this.handleOnUploadChange = this.handleOnUploadChange.bind(this);
  }
  handleInputChange(e: any) {
    this.setState({
      file: e.target.value,
    });
  }
  getBase64(file: any, callback: Function) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
  }
  handleOnUploadChange(info: any) {
    this.getBase64(info.file.originFileObj, (fileUrl: any) => {
      this.setState({
        file: fileUrl,
      });
    });
  }

  render() {
    return (
      <div className={styles.pdf}>
        <Row>
          <Col span={6}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card
                  hoverable
                  size="small"
                  title="远程地址"
                  style={{ textAlign: 'center' }}
                >
                  <Input
                    onChange={(e) => this.handleInputChange(e)}
                    defaultValue={this.state.file}
                  ></Input>
                </Card>
              </Col>
              <Col span={24}>
                <Card
                  hoverable
                  size="small"
                  title="本地上传"
                  style={{ textAlign: 'center' }}
                >
                  <Upload.Dragger
                    onChange={this.handleOnUploadChange}
                    name="file"
                    multiple={false}
                  >
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit
                      from uploading company data or other band files
                    </p>
                  </Upload.Dragger>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col span={18}>
            <div
              style={{
                position: 'relative',
              }}
            >
              <PdfReviewer file={this.state.file} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Pdf;
