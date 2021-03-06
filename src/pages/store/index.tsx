import React from 'react';
import Comp1 from './comp1';
import Comp2 from './comp2';
import ReactMarkdown from 'react-markdown';
import md from './README.md';
import styles from './index.less';

type Comon = {
  value: any;
  markdown: any;
};

class Compon extends React.Component<any, Comon> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      markdown: '',
    };
  }

  onChange = (e: any) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className={styles.store}>
        <div className="markdown-article">
          <ReactMarkdown>{md}</ReactMarkdown>
        </div>
        {/* <br /> */}
        {/* <input type="text" onChange={this.onChange} />
        <br />
        {this.state.value}
        <hr />
        <Comp1></Comp1>
        <hr />
        <Comp2></Comp2> */}
      </div>
    );
  }
}

export default Compon;
