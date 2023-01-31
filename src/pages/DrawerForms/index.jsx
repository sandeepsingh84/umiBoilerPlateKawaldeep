import React from 'react';
import { Button, Drawer, Select, TimePicker } from 'antd';
import moment from 'moment';
const { Option } = Select;
import LoginForm from '../DrawerPractice/LoginForm';
import SignInForm from '../DrawerPractice/SignInForm';
const DrawerForms = () => {
  const [drawerModal, setDrawerModal] = React.useState(false);
  const [formTitleKey, setFormTitleKey] = React.useState('logIn');
  const title = (key) => {
    switch (key) {
      case 'logIn':
        return 'Log In';
      case 'signIn':
        return 'sign In';
      default:
        '';
    }
  };
  const getUi = () => {
    switch (formTitleKey) {
      case 'logIn':
        return (
          <div>
            <LoginForm />
          </div>
        );
      case 'signIn':
        return (
          <div>
            <SignInForm />
          </div>
        );
      default:
        <></>;
    }
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setDrawerModal(true);
        }}
      >
        Open
      </Button>
      <div className="mt-5 flex">
        <p className="mr-3 mt-2">TimePicker</p>
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
      </div>
      <Drawer
        title={title(formTitleKey)}
        placement="right"
        onClose={() => setDrawerModal(false)}
        visible={drawerModal}
      >
        <Select
          onChange={(value) => setFormTitleKey(value)}
          defaultValue="logIn"
          style={{ width: '100%' }}
        >
          <Option value={'logIn'}>Log In</Option>
          <Option value={'signIn'}>Sign In</Option>
        </Select>
        {getUi()}
      </Drawer>
    </>
  );
};

export default DrawerForms;
