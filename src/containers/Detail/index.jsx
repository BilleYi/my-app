import React, { useState, useEffect } from "react"
import { Result, Button, Card } from "antd"
import { useSelector } from "react-redux"
import axios from "axios"
import "./style.css"

const Detail = function (props) {
  const { history, match } = props

  const [page, setPage] = useState({})

  const { isLogin } = useSelector((state) => state.loginInfo)

  const handleBackClick = () => {
    history.goBack()
  }

  useEffect(() => {
    const { id } = match.params
    axios
      .get(`http://www.dell-lee.com/react/api/detail.json?id=${id}`)
      .then((res) => {
        const { data } = res.data
        setPage(data)
      })
    return () => setPage({})
  }, [match.params, match.params.id])

  if (isLogin) {
    return (
      <Card
        extra={
          <Button
            shape="round"
            onClick={handleBackClick}
            style={{ backgroundColor: "gainsboro" }}
          >
            返回
          </Button>
        }
        title={page.title}
        headStyle={{ textAlign: "center" }}
      >
        <div
          className="detail"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </Card>
    )
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
      }
    />
  )
}

export default Detail
