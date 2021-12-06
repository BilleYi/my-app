import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from 'antd';

export default function NewsInfo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        //从后端获取JSON数据
        axios.get('https://rap2.mez100.com/rapserver/app/mock/56/pages/3')
            .then(res => {
                setData(res.data.data);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <List
                size="small"
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item.title}</List.Item>}
            />
        </div>
    )
}
