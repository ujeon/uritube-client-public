import React from 'react';
import { Col, Row, Layout } from 'antd';
import Youtube from './Youtube';
import CommentInCate from './CommentInCate';
// import { getData } from '../../../util/getData';
const { Content } = Layout;

const ContentForm = ({ match }) => {
  // const [item, setItem] = useState();

  // getData('categories/' + match.params.cate, item => {
  //   setItem(item.name);
  // });

  return (
    <Layout>
      <Content>
        <Row>
          <Col span={15}>
            <Youtube cateId={match.params.cate} item={match} />
          </Col>
          <Col span={9}>
            <div>
              <CommentInCate cateId={match.params.cate} />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ContentForm;
