import React from 'react';
import { Comment, Tooltip } from 'antd';

const CommentList = () => {
  return (
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
  );
};

export default CommentList;
