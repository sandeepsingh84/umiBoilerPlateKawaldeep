import { Form } from 'antd';
import PersonalInfo from './PersonalInfo';
import Profile from './Profile';
import Notification from './Notification';

const RevisionForm = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%', backgroundColor: 'white', border: '1px solid  #dbdbdb' }}>
        <Form style={{ padding: '40px' }} onFinish={(values) => console.log('values', values)}>
          <Profile />
          <hr />
          <PersonalInfo />
          <hr />

          <div className="mb-0 font-semibold text-gray-800" style={{ marginTop: '40px' }}>
            Notifications
          </div>
          <div style={{ marginBottom: '20px', fontSize: '13px' }} className="text-gray-500">
            we will always let you know about important changes ,but you pick what else you want to
            hear about
          </div>

          <hr />

          <Notification />
        </Form>
      </div>
    </div>
  );
};

export default RevisionForm;
