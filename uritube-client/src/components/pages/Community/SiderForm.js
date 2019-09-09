import React, { Component } from "react";
import { Layout } from "antd";
import SiderContents from "./SiderContents";
const { Sider } = Layout;

class SiderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "main"
    };
  }

  async componentDidMount() {
    const data = await (await fetch(
      "http://13.125.149.171:8080/titles"
    )).json();
    this.setState({
      data
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Sider width={200} style={{ background: "#fff" }}>
          {data.map(el => (
            <SiderContents
              key={el.id}
              title={el.name}
              contentsList={el.categories.map(el => (
                <link to="/community/:cate">{el.name}</link>
              ))}
            />
          ))}
        </Sider>
      </div>
    );
  }
}
export default SiderForm;
