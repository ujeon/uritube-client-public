import React from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;

const SiderContents = props => {
  return (
    <div>
      <Menu
        mode="inline"
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu title={<span>{props.title}</span>}>
          {props.contentsList.map(el => (
            <Menu.Item key={props.contentsList.indexOf(el)}>
              {el.props.children}
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </div>
  );
};

export default SiderContents;
