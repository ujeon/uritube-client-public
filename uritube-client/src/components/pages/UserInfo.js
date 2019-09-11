import React, { useState, useEffect } from 'react';
import { Descriptions } from 'antd';

const UserInfo = () => {
  const getData = async (value, callback) => {
    const config = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: window.localStorage.id
      }
    };
    try {
      const data = await (await fetch(
        `http://13.125.149.171:8080/${value}`,
        config
      )).json();
      callback(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData(`users/${window.sessionStorage.user_id}/info`, items => {
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
