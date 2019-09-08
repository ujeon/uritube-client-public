import React from 'react';
import { Comment, Tooltip } from 'antd';
import { getData } from '../../../util/getData';

class CommentsUser extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    getData(`users/${this.props.match.params.userid}/comments`, items => {
      this.setState({
        items
      });
    });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        {items.length === 0 || items.Comments.length === 0 ? (
          <div>작성한 댁글이 없습니당</div>
        ) : (
          <div>
            {items.Comments.map((data, idx) => (
              <Comment
                author={items.name}
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

export default CommentsUser;
