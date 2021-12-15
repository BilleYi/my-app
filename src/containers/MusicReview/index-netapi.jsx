import React, { Component } from "react"
import "./style.css"
import axios from "axios"
import { List, Avatar, Space } from "antd"
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons"

const IconText = function ({ icon, text }) {
  return (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )
}

class MusicReview extends Component {
  constructor(props) {
    super(props)
    this.state = { listData: [], isLoading: true }
  }

  // eslint-disable-next-line react/sort-comp
  render() {
    return (
      <List
        className="page-list"
        itemLayout="vertical"
        size="small"
        pagination={{
          onChange: (page) => {
            console.log(page)
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
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <IconText
                icon={StarOutlined}
                text="666"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text={item.liked}
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="6"
                key="list-vertical-message"
              />,
            ]}
            extra={<img width={100} alt="logo" src={item.pic} />}
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

  // 异步请求API获取数据
  async getInfo() {
    const newData = []
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      // eslint-disable-next-line no-await-in-loop
      await axios
        .get("https://api.muxiaoguo.cn/api/163reping")
        .then((res) => {
          newData.push({
            href: "#",
            id: res.data.data.songId,
            title: res.data.data.nickname,
            avatar: res.data.data.avatar,
            description: res.data.data.songName,
            content: res.data.data.content,
            pic: res.data.data.songPic,
            liked: res.data.data.likedCount,
          })
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
    }
    this.setState(() => ({ listData: newData, isLoading: false }))
  }

  componentDidMount() {
    // console.log('前',this.state.listData)
    this.getInfo()
    // console.log('后',this.state.listData)
  }
}

export default MusicReview
