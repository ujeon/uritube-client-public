import React from 'react';
import { Comment, Tooltip } from 'antd';
import { getData } from '../../../util/getData';

class CommentInCate extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    getData(`categories/${this.props.cateId}/comments`, items => {
      this.setState({
        items
      });
    });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        {items.length === 0 ? (
          <div>작성한 댁글이 없습니당</div>
        ) : (
          <div>
            {items.map((data, idx) => (
              <Comment
                key={idx}
                author={data.user_id}
                content={<p>{data.text}</p>}
                datetime={
                  <Tooltip title={data.createdAt}>
                    <span>{data.createdAt}</span>
                  </Tooltip>
                }
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CommentInCate;
