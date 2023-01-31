import React from 'react';
import SideBar from './SideBar';
import FormInfo from './FormInfo';
// import PersonalInformation from './FormInfo/PersonalInformation';
// import NotificationComponent from './FormInfo/NotificationComponent';
const Form = () => {
  return (
    <div
      style={{
        padding: '20px',
        width: '100%',
        // backgroundColor: ' #f2f2f2',

        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <div
        style={{
          border: '1px solid #e3e3e3',
          borderRadius: '10px',
          width: '80%',
          justifyContent: 'center',
          display: 'flex',
          padding: '20px',
        }}
      >
        <div style={{ width: '20%' }}>
          <SideBar />
        </div>
        <div style={{ width: '80%' }}>
          <FormInfo />
          {/* <PersonalInformation />
          <NotificationComponent /> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
