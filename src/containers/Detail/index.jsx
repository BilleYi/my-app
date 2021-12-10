import React, { useState,useEffect } from 'react';
import store from '../../store';
import { Result, Button,Card } from 'antd';
import axios from 'axios';
import './style.css';


function Detail(props){
    //redux数据获取
    const [state, setState] = useState(store.getState())
    const handleStoreChange = () => {//store数据更新事件
        setState(store.getState());
    }
    store.subscribe(handleStoreChange);//订阅reducer

    const [data,setData] = useState({})

    const handleBackClick = () => {
        props.history.goBack();
    }

    useEffect(() => {
        const id = props.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/detail.json?id=' + id)
            .then(res => {
                const data = res.data.data;
                setData(data)
            })

        return () => setData({})
    }, [props.match.params.id])

    if (state.isLogin) {
        return (
            <Card title={data.title}>
                <div className='detail' dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </Card>
        )
    } else {
        return (
                <Result
                    status="403"
                    title="请登录"
                    subTitle="抱歉，您无权访问此页面"
                    extra={<Button type="primary" onClick={handleBackClick}>返回</Button>}
                />
        )
    }

    
}

export default Detail;