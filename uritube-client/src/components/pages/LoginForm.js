import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './LoginForm.css';
import { Form, Icon, Input, Button } from 'antd';
import { postData } from '../../util/postData';
// import { getData } from '../../util/getData';

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFalse: false
    };
  }

  saveProfile = values => {
    console.log(values.hasOwnProperty.token);
    if (values.hasOwnProperty('token')) {
      window.sessionStorage.setItem('email', values.user_email);
      window.sessionStorage.setItem('name', values.user_name);
      window.sessionStorage.setItem('user_id', values.id);
      window.localStorage.setItem('id', values.token);
      window.localStorage.isLogin = true;
      return window.sessionStorage;
    } else {
      this.setState({
        loginFalse: true
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        postData(values, 'users/signin', datas => {
          this.saveProfile(datas);
        });
      }
    });
    setTimeout(() => {
      this.props.onLogin();
    }, 1000);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {this.state.loginFalse && <div>잘못된 양식인데여</div>}
        {window.localStorage.id ? (
          <Redirect to="/" />
        ) : (
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: 'Please input your E-mail!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="E-mail"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
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
        )}
      </div>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginForm;
