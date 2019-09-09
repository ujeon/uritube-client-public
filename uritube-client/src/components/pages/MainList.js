import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "antd";

const MainList = props => {
  const data = props.data;
  return (
    <Col span={4}>
      <Card title={data.name} bordered={false}>
        {data.categories.map(category => (
          <Link to={`community/${category.id}`}>
            <p key={category.id}>{category.name}</p>
          </Link>
        ))}
      </Card>
    </Col>
  );
};

export default MainList;
