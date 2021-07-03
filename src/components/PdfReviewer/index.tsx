import React from 'react';
import { Row, Col } from 'antd';
import styles from './index.less';
import { Document, Page, Outline, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfReviewerState {
  pages?: any;
  totalPage: number;
}

interface PdfReviewerProps {
  file: string;
}

class PdfReviewer extends React.Component<PdfReviewerProps, PdfReviewerState> {
  constructor(props: any) {
    super(props);
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.state = {
      pages: [],
      totalPage: 0,
    };
  }

  onDocumentLoadSuccess(props: any) {
    const { numPages } = props;
    let components: Array<any> = [];
    for (let i = 1; i <= numPages; i++) {
      components.push(<Page className={styles.page} pageNumber={i} key={i} />);
    }
    this.setState({
      totalPage: numPages,
      pages: components,
    });
  }

  render() {
    const Pages = this.state.pages;
    return (
      <div className={styles.pdfReviewer}>
        <div className={styles.menu}></div>
        <div className={styles.content}>
          <Document
            file={this.props.file}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            {this.state.totalPage && this.state.pages}
          </Document>
        </div>
      </div>
    );
  }
}

export default PdfReviewer;
