import React, { useState, useEffect } from 'react';
import { Descriptions } from 'antd';
import { getData } from '../../util/getData';

const UserInfo = ({ match }) => {
  const userId = match.params.userid;

  useEffect(async () => {
    await getData(`users/${userId}/info`, items => {
      setItems(items);
    });
  }, []);

  const [items, setItems] = useState([]);

  return (
    <div>
      <Descriptions title="개인 정보">
        <Descriptions.Item label="Email">{items.email}</Descriptions.Item>
        <Descriptions.Item label="Name">{items.name}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default UserInfo;
