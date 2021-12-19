import React, { Component } from "react"
import "./style.css"
import axios from "axios"
import { List, Avatar, Space } from "antd"
import { LikeOutlined } from "@ant-design/icons"

const IconText = function ({ icon, text }) {
  return (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )
}

const getTime = (timestamp) => {
  const unixTimestamp = new Date(timestamp * 1)
  return unixTimestamp.toLocaleString()
}

class MusicReview extends Component {
  constructor(props) {
    super(props)
    this.state = { listData: [], isLoading: true }
  }

  componentDidMount() {
    // console.log('前',this.state.listData)
    this.getInfo()
    // console.log('后',this.state.listData)
  }

  // 异步请求API获取数据
  getInfo() {
    const newData = []
    for (let i = 0; i < 12; i += 1) {
      axios
        .get("https://api.muxiaoguo.cn/api/163reping?api_key=79087ba62bb72df2")
        .then((res) => {
          const {
            songId,
            songPic,
            songName,
            nickname,
            content,
            avatar,
            likedCount,
            time,
          } = res.data.data
          newData.push({
            href: "#",
            id: songId,
            title: songName,
            avatar,
            description: nickname,
            content,
            pic: songPic,
            liked: likedCount,
            time,
          })
        })
        .then(() => {
          this.setState(() => ({ listData: newData, isLoading: false }))
        })
        .catch((error) => console.log(error))
    }
  }

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
            <b>♪欢迎光临♪</b>
          </div>
        }
        loading={this.state.isLoading}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <IconText
                icon={LikeOutlined}
                text={item.liked}
                key="list-vertical-like-o"
              />,
            ]}
            extra={<img width={100} alt="logo" src={item.pic} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={
                <a href={item.href} style={{ float: "right" }}>
                  {item.title}
                </a>
              }
              description={`${item.description} ——${getTime(item.time)}`}
            />
            {item.content}
          </List.Item>
        )}
      />
    )
  }
}

export default MusicReview
