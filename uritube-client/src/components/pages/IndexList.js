import React from 'react';
import { Card, Col, Row } from 'antd';

const IndexList = () => {
  // 안의 내용을 어떻게 자동으로 넣을 수 있을지 생각 할 것
  //
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={4}>
          <Card title="인기" bordered={false} style={{ height: '250px' }}>
            ingi
          </Card>
        </Col>
        <Col span={4}>
          <Card title="아이돌" bordered={false} style={{ height: '250px' }}>
            <p>BTS</p>
            <p>TWICE</p>
            <p>Seventeen</p>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="스포츠" bordered={false} style={{ height: '250px' }}>
            <p>국내 야구</p>
            <p>해외 야구</p>
            <p>국내 농구</p>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="요리" bordered={false} style={{ height: '250px' }}>
            <p>한식</p>
            <p>중식</p>
            <p>양식</p>
            <p>태국</p>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Card title" bordered={false} style={{ height: '250px' }}>
            Card content
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Card title" bordered={false} style={{ height: '250px' }}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default IndexList;
