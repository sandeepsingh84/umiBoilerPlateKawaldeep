import React from 'react';
// import { Menu } from 'antd';
// import { MailOutlined } from '@ant-design/icons';
// const items = [
//   {
//     label: 'Home',
//     key: 'home',
//     icon: <MailOutlined />,
//   },
//   {
//     label: 'Category',
//     key: 'category',
//     icon: <MailOutlined />,
//   },
//   {
//     label: 'Service',
//     key: 'service',
//     icon: <MailOutlined />,
//   },
//   {
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),
//     key: 'alipay',
//   },
// ];

// const MenuBar = () => {
//   const [current, setCurrent] = React.useState('home');
//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };
//   return (
//     <div>
//       <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
//         {items?.map((item) => (
//           <Menu.Item icon={item.icon} key={item.key}>
//             {item.label}
//           </Menu.Item>
//         ))}
//       </Menu>
//     </div>
//   );
// };

// export default MenuBar;

// {
//   /* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
//   {items?.map((item) => (
//     <Menu.Item icon={item.icon} key={item.key}>
//       {item.label}
//     </Menu.Item>
//   ))}
// </Menu>; */
// }

import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
console.log('items', items);
const App = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        {items?.map((item) => (
          <Menu.Item key={item?.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default App;
