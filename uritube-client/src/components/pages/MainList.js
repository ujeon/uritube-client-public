import React from "react";
import { Card, Col } from "antd";

const MainList = props => {
  return (
    <Col span={4}>
      {/* <Card title={data.name} bordered={false}>
        {data.categories.map(category => (
          <p key={category.id}>{category.name}</p>
        ))}
      </Card> */}
      <Card title={props.title} bordered={false}>
        <p>{props.contentsList}</p>
      </Card>
    </Col>
  );
};

export default MainList;
