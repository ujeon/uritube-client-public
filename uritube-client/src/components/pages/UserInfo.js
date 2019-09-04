import React from "react";
import { Descriptions } from "antd";

const UserInfo = () => {
  const what = "abc";
  return (
    <div>
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Email">1810000000</Descriptions.Item>
        <Descriptions.Item label="Nickname">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default UserInfo;
