import React from 'react';
import { Menu } from 'antd';
const menuItems = [
  {
    icon: <i className="fa-solid fa-circle-user" />,
    itemName: 'Account',
  },
  {
    icon: <i className="fa-solid fa-key" />,
    itemName: 'Password',
  },
  {
    icon: <i className="fa-solid fa-clipboard-list" />,
    itemName: 'Plan & billing',
  },
  {
    icon: <i className="fa-solid fa-user-group" />,
    itemName: 'Team',
  },
  {
    icon: <i className="fa-brands fa-invision" />,
    itemName: 'Integration',
  },
];
const SideBar = () => {
  return (
    <div>
      <Menu style={{ background: 'none' }}>
        {menuItems?.map((items) => (
          <Menu.Item icon={items?.icon} key={items?.itemName}>
            {items?.itemName}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default SideBar;
