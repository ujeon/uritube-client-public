import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'antd';

const MainList = props => {
  const data = props.data;
  return (
    <Col span={4}>
      <Card title={data.name} bordered={false}>
        {data.categories.map(category => (
          <p key={category.id}>
            <Link to={`community/${category.id}/`}>{category.name}</Link>
          </p>
        ))}
      </Card>
    </Col>
  );
};

export default MainList;
