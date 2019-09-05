import React from 'react';
import { Col, Row, Layout } from 'antd';
import Youtube from './Youtube';
import CommentInCate from './CommentInCate';
const { Content } = Layout;

const ContentForm = ({ match }) => {
  return (
    <Layout>
      <Content>
        <Row>
          <Col span={12}>
            {console.log(match.params)}
            {/* <Youtube videos={props.appVideos}></Youtube> */}
            <Youtube />
          </Col>
          <Col span={12}>
            <CommentInCate />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ContentForm;
