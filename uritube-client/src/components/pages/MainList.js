import React from "react";
import { Card, Col } from "antd";

const MainList = ({ data }) => {
  return (
    <Col span={4}>
      <Card title={data.name} bordered={false}>
        {data.categories.map(category => (
          <p key={category.id}>{category.name}</p>
        ))}
      </Card>
    </Col>
  );
};

export default MainList;
