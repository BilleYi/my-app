import React, { useState, useEffect } from "react"
import axios from "axios"
import { List } from "antd"
import { Link } from "react-router-dom"
import "./style.css"

export default function EnglishCorner() {
  const [data, setData] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    // 从后端获取JSON数据
    axios
      .get("/pages/2")
      .then((res) => {
        if (isMounted) {
          setData(res.data.data)
          setIsLoading(false)
        }
      })
      .catch((err) => console.error("EnglishCorner", err))

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="english-corner">
      <List
        size="small"
        bordered
        dataSource={data}
        loading={isLoading}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/pages/detail/${item.id}`} className="link">
              {item.title}
            </Link>
          </List.Item>
        )}
      />
    </div>
  )
}
