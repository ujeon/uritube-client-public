import React from 'react';
import { Comment, Form, Button, Input } from 'antd';
import moment from 'moment';
import { postData } from '../../../util/postData';

const { TextArea } = Input;

// const CommentList = ({ comments }) => (
//   <List
//     dataSource={comments}
//     header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
//     itemLayout="horizontal"
//     renderItem={props => <Comment {...props} />}
//   />
// );

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      submitting: false,
      value: '',
      login: window.sessionStorage
    };
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            name: this.state.login.name,
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      });
    }, 1000);
    const postValue = {
      user: this.state.login.name,
      text: this.state.value,
      category_id: this.props.cateId
    };
    postData(postValue, 'comments/add', data => {
      console.log(data);
    });
    // context API로 리팩토링
    // this.props.write = true;
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { submitting, value } = this.state;

    return (
      <div>
        {/* {console.log(this.props)}
        {comments.length > 0 && <CommentList comments={comments} />} */}
        <Comment
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}

export default CommentInput;
