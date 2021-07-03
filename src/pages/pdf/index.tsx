import React from 'react';
import PdfReviewer from '@/components/PdfReviewer';
import styles from './index.less';
import { Row, Col, Input, Card } from 'antd';

class Pdf extends React.Component {
  state = {
    file: 'http://reptic-crla.collanaud.qc.ca/ESL/wp-content/uploads/2014/03/Simple-Present-Tense-Booklet-Tutee.pdf',
  };
  handleInputChange(e: any) {
    this.setState({
      file: e.target.value,
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
