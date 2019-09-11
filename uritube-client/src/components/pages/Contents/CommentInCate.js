import React from 'react';
import { Comment, Tooltip } from 'antd';
import { getData } from '../../../util/getData';
import CommentInput from './CommentInput';

class CommentInCate extends React.Component {
  state = {
    cateId: this.props.cateId,
    items: []
  };

  componentDidUpdate(prevProp) {
    if (this.props.cateId !== prevProp.cateId) {
      getData(`categories/${this.props.cateId}/comments`, items => {
        this.setState({
          items
        });
      });
    }
  }

  componentDidMount() {
    setInterval(() => {
      getData(`categories/${this.props.cateId}/comments`, items => {
        this.setState({
          items
        });
      });
    }, 1000);
  }

  render() {
    const { items } = this.state;
    return (
      <div style={{ overflow: 'auto' }}>
        {items.length === 0 ||
        items === undefined ||
        items.constructor === Object ? (
          <div>작성한 댁글이 없습니당</div>
        ) : (
          <div>
            {items.map((data, idx) => (
              <Comment
                key={idx}
                author={data.user_name}
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
        {window.localStorage.id && (
          <CommentInput write={this.state.write} cateId={this.props.cateId} />
        )}
      </div>
    );
  }
}

export default CommentInCate;
