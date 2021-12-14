import React, { useState, useEffect } from 'react';
import { Result, Button, Card } from 'antd';
import axios from 'axios';
import store from '../../store';
import './style.css';

const Detail = function (props) {
  const { history, match } = props;
  // redux数据获取
  const [state, setState] = useState(store.getState());
  const handleStoreChange = () => {
    // store数据更新事件
    setState(store.getState());
  };
  store.subscribe(handleStoreChange); // 订阅reducer

  const [page, setPage] = useState({});

  const handleBackClick = () => {
    history.goBack();
  };

  useEffect(() => {
    const { id } = match.params;
    axios
      .get(`http://www.dell-lee.com/react/api/detail.json?id=${id}`)
      .then((res) => {
        const { data } = res.data;
        setPage(data);
      });

    return () => setPage({});
  }, [match.params, match.params.id]);

  if (state.isLogin) {
    return (
      <Card title={page.title}>
        <div
          className="detail"
          dangerouslySetInnerHTML={{ __html: page.content }}/>
      </Card>
    );
  }
  return (
    <Result
      status="403"
      title="请登录"
      subTitle="抱歉，您无权访问此页面"
      extra={
        <Button type="primary" onClick={handleBackClick}>
          返回
        </Button>
      }/>
  );
};

export default Detail;
