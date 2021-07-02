import React from 'react';
import { Row, Col } from 'antd';
import { Document, Page } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `./pdf.worker.js`;

class Pdf extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col span={12}>ad</Col>
          <Col span={12}>ff</Col>
        </Row>
        <div>
          <Document file="./scroll.pdf">
            <Page pageNumber="2" />
          </Document>
          <p>
            Page {1} of {1}
          </p>
        </div>
      </>
    );
  }
}

export default Pdf;
