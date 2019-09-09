import React from 'react';
import { Col, Row, Layout } from 'antd';
import Youtube from './Youtube';
import CommentInCate from './CommentInCate';
import CommentInput from './CommentInput';
const { Content } = Layout;

const ContentForm = ({ match }) => {
  const login = window.sessionStorage.id;
  return (
    <Layout>
      <Content>
        <Row>
          <Col span={12}>
            {/* {console.log(match.params)} */}
            {/* <Youtube videos={props.appVideos}></Youtube> */}
            <Youtube />
          </Col>
          <Col span={12}>
            <div>
              <CommentInCate cateId={match.params.cate} />
              {login && <CommentInput cateId={match.params.cate} />}
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ContentForm;
