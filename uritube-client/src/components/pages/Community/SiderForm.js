import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import SiderContents from './SiderContents';
import { getData } from '../../../util/getData';
const { Sider } = Layout;

class SiderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: 'main'
    };
  }

  componentDidMount() {
    getData('titles', result => {
      this.setState({ data: result });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Sider width={200} style={{ background: '#fff' }}>
          {data.map(el => (
            <SiderContents
              key={el.id}
              title={el.name}
              contentsList={el.categories.map(category => (
                <p>
                  <Link to={`${category.id}`}>{category.name}</Link>
                </p>
              ))}
            />
          ))}
        </Sider>
      </div>
    );
  }
}
export default SiderForm;
