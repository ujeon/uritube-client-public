import React, { Component } from "react";
import { Layout } from "antd";
import SiderContents from "./SiderContents";
const { Sider } = Layout;

class SiderFormUser extends Component {
  state = {
    data: []
  };

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
                <p>{el.name}</p>
              ))}
            />
          ))}
        </Sider>
      </div>
    );
  }
}
export default SiderFormUser;
