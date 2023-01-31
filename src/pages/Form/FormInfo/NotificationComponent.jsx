import { Radio, Form, Checkbox, Button } from 'antd';
const NotificationComponent = () => {
  return (
    <div
      style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', marginTop: '20px' }}
    >
      <p className="mb-0 font-semibold text-gray-800" style={{}}>
        Notifications
      </p>
      <p style={{ fontSize: '13px' }} className="text-gray-500">
        Provide basic information about the job. Be specific with the job title.
      </p>
      <div>
        <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
          By email
        </p>
        <div style={{ display: 'flex' }}>
          <div>
            <Checkbox />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <div
              style={{ fontSize: '13px' }}
              className="font-semibold text-gray-600 flex flex-column"
            >
              Comments
            </div>
            <div style={{ marginBottom: '20px', fontSize: '13px' }} className="text-gray-500">
              Get notified when someones apply foe a job.
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <Checkbox />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <div
              style={{ fontSize: '13px' }}
              className="font-semibold text-gray-600 flex flex-column"
            >
              Comments
            </div>
            <div style={{ marginBottom: '20px', fontSize: '13px' }} className="text-gray-500">
              Get notified when someones apply foe a job.
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <Checkbox />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <div
              style={{ fontSize: '13px' }}
              className="font-semibold text-gray-600 flex flex-column"
            >
              Comments
            </div>
            <div style={{ marginBottom: '20px', fontSize: '13px' }} className="text-gray-500">
              Get notified when someones apply foe a job.
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mb-0 font-semibold text-gray-800">Push Notifications</p>
        <p style={{ fontSize: '13px' }} className="text-gray-500">
          These are delivered via SMS to your mobile phone.
        </p>
      </div>

      <Form.Item name="notification" style={{ margin: '0' }} initialValue={'yes'}>
        <Radio.Group>
          <Radio
            style={{ marginLeft: '5px', fontSize: '13px' }}
            className="font-semibold text-gray-600"
            value={'yes'}
          >
            Everything
          </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="notification" style={{ margin: '0' }} initialValue={'no'}>
        <Radio.Group>
          <Radio
            style={{ marginLeft: '5px', fontSize: '13px' }}
            className="font-semibold text-gray-600"
            value={'  Same as email'}
          >
            Same as email
          </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="notification" style={{ margin: '0' }} initialValue={'yes'}>
        <Radio.Group>
          <Radio
            style={{ marginLeft: '5px', fontSize: '13px' }}
            className="font-semibold text-gray-600"
            value={'no notification'}
          >
            No push notification
          </Radio>
        </Radio.Group>
      </Form.Item>

      <div className="w-full justify-end flex " style={{ marginTop: '20px' }}>
        <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
          <div className="flex w-36 justify-between mr-20">
            <div>
              <Button type="Default Button" style={{ borderRadius: '5px' }}>
                Cancel
              </Button>
            </div>
            <div>
              <Button
                type="primary Button"
                htmlType="submit"
                style={{
                  backgroundColor: 'purple',
                  border: '1px solid purple',
                  borderRadius: '5px',
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </Form.Item>
      </div>
    </div>
  );
};
export default NotificationComponent;
