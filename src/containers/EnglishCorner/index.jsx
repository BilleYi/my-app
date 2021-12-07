import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Divider } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

export default function EnglishCorner() {
    const [data, setData] = useState([]);

    useEffect(() => {
        //从后端获取JSON数据
        axios.get('https://dev-v2.bundleb2b.net/apidoc-server/app/mock/56/pages/2')
            .then(res => {
                setData(res.data.data);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="english-corner">
            <Divider orientation="left">Small Size</Divider>
            <List
                size="small"
                bordered
                dataSource={data}
                renderItem={item => <List.Item>
                    <Link to={`/pages/detail/${item.id}`}>{item.title}</Link>
                </List.Item>}
            />
        </div>
    )
}
