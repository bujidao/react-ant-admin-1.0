import React from 'react';
import Comp1 from './comp1';
import Comp2 from './comp2';

type Comon = {
  value: any;
};

class Compon extends React.Component<any, Comon> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange = (e: any) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div>
        store
        <br />
        <input type="text" onChange={this.onChange} />
        <br />
        {this.state.value}
        <hr />
        <Comp1></Comp1>
        <hr />
        <Comp2></Comp2>
      </div>
    );
  }
}

export default Compon;
