import React from 'react';

import { Form, Input, Button, InputNumber, DatePicker } from 'antd';

const SignInForm = () => {
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };
  function onChange(value) {
    console.log('changed', value);
  }
  return (
    <Form
      style={{ marginTop: '20px' }}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
      onFinish={(values) => console.log('values', values)}
    >
      <div className="flex">
        <p style={{ width: '80px' }}>User name:</p>
        <Form.Item name="Username">
          <Input placeholder="Enter Username" />
        </Form.Item>
      </div>
      <div className="flex">
        <p style={{ width: '80px' }}>Email:</p>
        <Form.Item name="Email">
          <Input placeholder="Enter Email" />
        </Form.Item>
      </div>
      <div className="flex">
        <p style={{ width: '80px' }}>DOB:</p>
        <Form.Item name="DOB">
          <DatePicker />
        </Form.Item>
      </div>
      <div className="flex">
        <p style={{ width: '80px' }}>Phone no.:</p>
        <Form.Item name="Phoneno.">
          <Input placeholder="Enter phone number" />
          {/* <InputNumber
            min={1}
            max={10}
            defaultValue={0}
            onChange={onChange}
            placeholder="Enter Phone Number"
          /> */}
        </Form.Item>
      </div>
      <div className="flex">
        <p style={{ width: '80px' }}>Password:</p>
        <Form.Item name="password">
          <Input placeholder="Enter Password" />
        </Form.Item>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            Sign Up
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SignInForm;
