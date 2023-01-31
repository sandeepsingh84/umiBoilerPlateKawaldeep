import { Button, Drawer, Select } from 'antd';
import React from 'react';
import LoginForm from './LoginForm';
import SignInForm from './SignInForm';
const { Option } = Select;
const DrawerPractice = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [titleKey, setTitleKey] = React.useState('loginForm');

  function getTitle(key) {
    switch (key) {
      case 'loginForm':
        return 'Login Form';
      case 'signInForm':
        return 'Sign In';
      default:
        return '';
    }
  }
  const getUI = () => {
    switch (titleKey) {
      case 'loginForm':
        return (
          <div>
            <LoginForm />
          </div>
        );
      case 'signInForm':
        return (
          <div>
            <SignInForm />
          </div>
        );
      default:
        return <></>;
    }
  };
  return (
    <>
      <div>
        <Button type="primary" onClick={() => setIsVisible(true)}>
          Open drawer
        </Button>
      </div>
      <Drawer
        title={getTitle(titleKey)}
        placement="right"
        onClose={() => setIsVisible(false)}
        visible={isVisible}
        //  maskClosable={false} means  when you  click on cross button then close the drawer
        //  if you want close the drawer with click on anywhere
        //   on the screen  then usr property " maskClosable ={true} "
        // maskClosable={false}
      >
        <Select
          style={{ width: '100%' }}
          onChange={(value) => setTitleKey(value)}
          defaultValue="loginForm"
        >
          <Option value={'loginForm'}>Log In form</Option>
          <Option value={'signInForm'}>Sign In form</Option>
        </Select>
        {/* getUI is a function and where switch b/w the login and signin component  */}
        {getUI()}
      </Drawer>
    </>
  );
};

export default DrawerPractice;
