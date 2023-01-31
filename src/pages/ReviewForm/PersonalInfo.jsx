import { Input, Form, Select } from 'antd';
const { Option } = Select;
const PersonalInfo = () => {
  return (
    <div>
      <p className="mb-0 font-semibold text-gray-800" style={{ marginTop: '40px' }}>
        Personal Information
      </p>
      <p style={{ fontSize: '13px' }} className="text-gray-500">
        use a permanent address where you can receive mail.
      </p>
      <hr />

      <div className="flex" style={{ marginTop: '20px' }}>
        <div style={{ width: '34%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            First name
          </p>
        </div>
        <Form.Item name="firstName">
          <Input style={{ width: '280px', borderRadius: '5px' }} />
        </Form.Item>
      </div>

      <hr />

      <div className="flex" style={{ marginTop: '20px' }}>
        <div style={{ width: '34%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            Last name
          </p>
        </div>
        <Form.Item name="lastName">
          <Input style={{ width: '280px', borderRadius: '5px' }} />
        </Form.Item>
      </div>

      <hr />

      <div className="flex" style={{ marginTop: '20px' }}>
        <div style={{ width: '34%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            Email address
          </p>
        </div>
        <Form.Item name="email">
          <Input style={{ width: '420px', borderRadius: '5px' }} />
        </Form.Item>
      </div>

      <hr />

      <div className="flex" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div style={{ width: '34%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            Country
          </p>
        </div>
        <Select style={{ width: '280px' }}>
          <Option value="jack">Canada</Option>
          <Option value="lucy">India</Option>

          <Option value="Yiminghe">Australia</Option>
        </Select>
      </div>

      <hr />

      <div className="flex" style={{ marginTop: '20px' }}>
        <div style={{ width: '34%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            Street address
          </p>
        </div>
        <Form.Item name="street">
          <Input style={{ width: '420px', borderRadius: '5px' }} />
        </Form.Item>
      </div>

      <hr />

      <div className="flex" style={{ marginTop: '20px' }}>
        <div style={{ width: '34%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            City
          </p>
        </div>
        <Form.Item name="city">
          <Input style={{ width: '280px', borderRadius: '5px' }} />
        </Form.Item>
      </div>

      <hr />

      <div className="flex" style={{ marginTop: '20px' }}>
        <div style={{ width: '34%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            State/Province
          </p>
        </div>
        <Form.Item name="State">
          <Input style={{ width: '280px', borderRadius: '5px' }} />
        </Form.Item>
      </div>

      <hr />

      <div className="flex" style={{ marginTop: '20px' }}>
        <div style={{ width: '34%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            ZIP/Postal code
          </p>
        </div>
        <Form.Item name="zip">
          <Input style={{ width: '280px', borderRadius: '5px' }} />
        </Form.Item>
      </div>
    </div>
  );
};
export default PersonalInfo;
