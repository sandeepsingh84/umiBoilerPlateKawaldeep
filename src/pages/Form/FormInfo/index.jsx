import React from 'react';
import { Form } from 'antd';
import ProfileComponent from './ProfileComponent';
import PersonalInformation from './PersonalInformation';
import NotificationComponent from './NotificationComponent';

const FormInfo = () => {
  return (
    <div>
      <Form onFinish={(values) => console.log('values', values)}>
        <ProfileComponent />

        <PersonalInformation />
        <NotificationComponent />
      </Form>
    </div>
  );
};

export default FormInfo;
