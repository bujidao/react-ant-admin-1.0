import React from 'react';
import styles from './index.less';

import { getList } from '@/api/test';

type ListItemInfoParams = {
  name: string;
};

type ListItemParams = {
  info: ListItemInfoParams;
};

class ListItem extends React.Component<ListItemParams> {
  constructor(props: any) {
    super(props);
  }

  public handleItemClick(row: any) {
    console.log(row);
  }

  render() {
    return (
      <li onClick={this.handleItemClick.bind(this, this.props.info)}>
        {this.props.info.name}
      </li>
    );
  }
}

class List extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      listData: [],
    };
    this.fitchData = this.fitchData.bind(this);
    // this.fitchData();
  }

  public fitchData() {
    getList().then((res) => {
      this.setState({
        listData: Object.assign([], res.data.list),
      });
    });
  }

  public foo() {
    console.log('foo');
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>list</h1>
        <ul>
          {this.state.listData &&
            this.state.listData.map((item: any) => (
              <ListItem key={item.id} info={item} />
            ))}
        </ul>
      </div>
    );
  }
}

export default List;
