import React from 'react';
import { Input, Form, Select, Button } from 'antd';
const { Option } = Select;

const PersonalInformation = () => {
  return (
    <div
      style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', marginTop: '20px' }}
    >
      <p className="mb-0 font-semibold text-gray-800" style={{}}>
        Personal Information
      </p>
      <p style={{ fontSize: '13px' }} className="text-gray-500">
        use a permanent address where you can receive mail.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', marginRight: '6px' }}>
          {' '}
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            First name
          </p>
          <Form.Item name="firstName">
            <Input style={{ width: '98%', borderRadius: '5px', marginRight: '10px' }} />
          </Form.Item>
        </div>
        <div style={{ width: '50%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            Last name
          </p>
          <Form.Item name="lastName">
            <Input style={{ width: '98%', borderRadius: '5px' }} />
          </Form.Item>
        </div>
      </div>

      <div style={{}}>
        <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
          Email address
        </p>

        <Form.Item name="email">
          <Input style={{ width: '460px', borderRadius: '5px' }} />
        </Form.Item>
      </div>

      <div style={{}}>
        <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
          Country
        </p>

        <Select value="India" style={{ width: '350px' }}>
          <Option value="canada">Canada</Option>
          <Option value="India">India</Option>

          <Option value="Australia">Australia</Option>
        </Select>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
          Street address
        </p>

        <Form.Item name="street">
          <Input style={{ width: '100%', borderRadius: '5px' }} />
        </Form.Item>
      </div>

      <div
        className="flex"
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
      >
        <div style={{ width: '32%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            City
          </p>
          <Form.Item name="city">
            <Input style={{ width: '', borderRadius: '5px' }} />
          </Form.Item>
        </div>
        <div style={{ width: '32%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            State/Province
          </p>
          <Form.Item name="State">
            <Input style={{ width: '', borderRadius: '5px' }} />
          </Form.Item>
        </div>
        <div style={{ width: '32%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            ZIP/Postal code
          </p>
          <Form.Item name="zip">
            <Input style={{ width: '', borderRadius: '5px' }} />
          </Form.Item>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          type="primary Button"
          htmlType="submit"
          style={{
            backgroundColor: '#744fdb',
            border: '1px solid #744fdb',
            borderRadius: '5px',
            marginTop: '20px',
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
export default PersonalInformation;
