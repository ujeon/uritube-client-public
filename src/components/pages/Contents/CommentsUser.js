import React from 'react';
import { Comment, Tooltip } from 'antd';
import { getData } from '../../../util/getData';

class CommentsUser extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    setInterval(() => {
      getData(`users/${this.props.match.params.userid}/comments`, items => {
        this.setState({
          items
        });
      });
    }, 3000);
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        {items === undefined ||
        items.length === 0 ||
        items.Comments.length === 0 ? (
          <div>작성한 댁글이 없습니당</div>
        ) : (
          <div>
            {items.Comments.map((data, idx) => (
              <Comment
                key={idx}
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
