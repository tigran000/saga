import React, { Component } from 'react';
import Swal from 'sweetalert2';
import {
  Form, Icon, Input, Button
} from 'antd';
import { connect } from 'react-redux';

import {
  loginRequest,
  resetError
} from '../../actions';

class NormalLoginForm extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, credentials) => {
      if (!err) {
        this.props.loginRequest(credentials)
      }
    });
  }

  componentDidUpdate() {
    if (this.props.error) {
      Swal.fire({
        title: 'Error!',
        text: 'Wrong credentials',
        type: 'error',
        confirmButtonText: 'Okay'
      });
      this.props.resetError();
      this.props.form.resetFields();
    }
  }

  render() {

    if (this.props.isAuthenticated) {
      this.props.isAdmin ? this.props.history.push('/admin') :
        this.props.history.push('/teacher');
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" >
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
        </Form.Item>
      </Form>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const f1 = state => ({
  error: state.user.error,
  isFetching: state.user.isFetching,
  isAdmin: state.user.isAdmin,
  isAuthenticated: state.user.isAuthenticated
});
export default connect(f1, { loginRequest, resetError })(LoginForm);