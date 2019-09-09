import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import { Form, Icon, Input, Button } from 'antd';
import { postData } from '../../util/postData';
import { getData } from '../../util/getData';

class NormalLoginForm extends React.Component {
  state = {
    items: []
  };

  saveProfile = values => {
    window.sessionStorage.setItem('email', values.email);
    window.sessionStorage.setItem('name', values.name);
    window.sessionStorage.setItem('id', values.id);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        postData(values, 'users/signin');
        //임의로 3을 쓰겠음
        getData(`users/3/comments`, items => {
          this.setState({
            items
          });
          this.saveProfile(items);
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    // console.log(this.state.items);
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your E-mail!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="E-mail"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {/* {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="/forgot">
            Forgot password
          </a> */}
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Login
            <Link to="/community/:cate/:id" />
          </Button>
          <Link to="/community/signup">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign Up
            </Button>
          </Link>
        </Form.Item>
      </Form>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginForm;
