import { Radio, Form, Checkbox, Button } from 'antd';
const Notification = () => {
  return (
    <div>
      <div style={{ marginTop: '20px', display: 'flex' }}>
        <div style={{ width: '34%' }}>
          <p style={{ fontSize: '13px' }} className="font-semibold text-gray-600">
            By email
          </p>
        </div>
        <div style={{ borderRadius: '5px' }}>
          <div style={{ display: 'flex' }}>
            <div>
              <Checkbox />
            </div>
            <div
              style={{ marginLeft: '5px', fontSize: '13px' }}
              className="font-semibold text-gray-600"
            >
              Comments
            </div>
          </div>
          <div style={{ marginBottom: '20px', fontSize: '12px' }} className="text-gray-500">
            Get notified when someones posts a comment on a posting.
          </div>
        </div>
      </div>

      <div style={{ width: '280px', marginLeft: '330px', borderRadius: '5px' }}>
        <div style={{ display: 'flex' }}>
          <div>
            <Checkbox />
          </div>
          <div
            style={{ marginLeft: '5px', fontSize: '13px' }}
            className="font-semibold text-gray-600"
          >
            Candidates
          </div>
        </div>
        <div style={{ marginBottom: '20px', fontSize: '13px' }} className="text-gray-500">
          Get notified when someones apply foe a job.
        </div>
      </div>
      <div style={{ width: '280px', marginLeft: '330px', borderRadius: '5px' }}>
        <div style={{ display: 'flex' }}>
          <div>
            <Checkbox />
          </div>
          <div
            style={{ marginLeft: '5px', fontSize: '13px' }}
            className="font-semibold text-gray-600"
          >
            offers
          </div>
        </div>
        <div style={{ marginBottom: '20px', fontSize: '13px' }} className="text-gray-500">
          Get notified when someones accept an offer.
        </div>
      </div>
      <hr />
      <div className="flex" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div style={{ width: '34%' }}>
          <p
            style={{ marginLeft: '5px', fontSize: '13px' }}
            className="font-semibold text-gray-600"
          >
            Push notification
          </p>
        </div>
        <div className="flex flex-col">
          <p style={{ marginBottom: '20px', fontSize: '12px' }} className="text-gray-500">
            These are delivered by SMS to your mobile phone
          </p>
          <Form.Item name="notification" initialValue={'yes'}>
            <Radio.Group>
              <Radio
                style={{ marginLeft: '5px', fontSize: '13px' }}
                className="font-semibold text-gray-600"
                value={'yes'}
              >
                Everything
              </Radio>
              <Radio
                style={{ marginLeft: '5px', fontSize: '13px' }}
                className="font-semibold text-gray-600"
                value={'Same as email'}
              >
                Same as email
              </Radio>

              <Radio
                style={{ marginLeft: '5px', fontSize: '13px' }}
                className="font-semibold text-gray-600"
                value={'no notification'}
              >
                No push notification
              </Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
      <hr />
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
export default Notification;
