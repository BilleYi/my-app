import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

// eslint-disable-next-line react/function-component-definition
export default function EnglishCorner() {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    // 从后端获取JSON数据
    axios
      .get('https://dev-v2.bundleb2b.net/apidoc-server/app/mock/56/pages/2')
      .then((res) => {
        if (isMounted) {
          setData(res.data.data);
          setIsLoading(false);
        }
      })
      .catch((err) => console.error('EnglishCorner', err));
    // eslint-disable-next-line no-return-assign
    return () => (isMounted = false);
  }, []);

  return (
    <div className="english-corner">
      <List
        size="small"
        bordered
        dataSource={data}
        loading={isLoading}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/pages/detail/${item.id}`}>{item.title}</Link>
          </List.Item>
        )}/>
    </div>
  );
}
