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

class MusicReview extends Component {
    constructor(props) {
        super(props);
        this.state = { listData: [], isLoading: true}
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
                    pageSize: 5,
                }}
                dataSource={this.state.listData}
                footer={
                    <div>
                        <b>欢迎光临小云村</b>
                    </div>
                }
                loading={this.state.isLoading}
                renderItem={item => (
                    <List.Item
                        key={item.songId}
                        actions={[
                            <IconText icon={StarOutlined} text="666" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text={item.likedCount} key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="6" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={100}
                                alt="logo"
                                src={item.songPic}
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.songName}</a>}
                            description={item.nickname}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        )
    }

    
    componentDidMount = () => {
        // console.log('前',this.state.listData)
        //异步请求API获取数据
        //https://api.muxiaoguo.cn/api/163reping
        axios.get('https://dev-v2.bundleb2b.net/apidoc-server/app/mock/56/pages/1')
            .then(res => {
                // console.log(res.data.data);
                this.setState({ listData: res.data.data });
                this.setState({isLoading:false});
            })
            .catch(error => console.log('MusicReview',error));

        // console.log('后',this.state.listData)
    }

}

export default MusicReview;