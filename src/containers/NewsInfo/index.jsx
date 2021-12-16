import React, { useState, useEffect } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { List } from "antd"
import { Link } from "react-router-dom"
import "./style.css"

export default function NewsInfo() {
  const [data, setData] = useState([])
  const { isLogin } = useSelector((state) => state.loginInfo)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    // 从后端获取JSON数据
    axios
      .get("/pages/3")
      .then((res) => {
        if (isMounted) {
          setData(res.data.result)
          setIsLoading(false)
        }
      })
      .catch((err) => console.error("NewsInfo", err))

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div>
      <List
        className="news-info"
        size="small"
        bordered
        dataSource={data}
        loading={isLoading}
        renderItem={(item) =>
          isLogin ? (
            <List.Item>
              <a href={item.path}>{`${item.title}-----${item.time}`}</a>
            </List.Item>
          ) : (
            <List.Item>
              <Link to={`/pages/detail/${item.id}`}>
                {`${item.title}-----${item.time}`}
              </Link>
            </List.Item>
          )
        }
      />
    </div>
  )
}
