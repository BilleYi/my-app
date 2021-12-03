import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

class PageList extends Component {
    constructor(props) {
        super(props);
        this.state = {listData: []}
    }

    render() {
        return (
            <List
                className = "page-list"
                itemLayout="vertical"
                size="small"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={this.state.listData}
                footer={
                    <div>
                        <b>新闻网</b>
                    </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="666" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="666" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="6" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={300}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        )
    }

    //异步请求API获取数据
    async getInfo() {
        let newData = [];
        for (let i = 0; i < 9; i++) {
           await axios.get('https://api.muxiaoguo.cn/api/163reping')
                .then(res => {
                    newData.push({
                        href: '#',
                        title: `新闻 ${res.data.data.songId}`,
                        avatar: 'https://joeschmoe.io/api/v1/random',
                        description: 'hello',
                        content: res.data.data.content,
                    });
                })
                .catch(error => console.log(error));
        }
        await this.setState(state => {return { listData: newData }})
    }

    componentDidMount = () => {
        console.log('前',this.state.listData)
        this.getInfo()
        console.log('后',this.state.listData)
    }

}

export default PageList;