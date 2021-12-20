/**
 * @description 影视页组件详情页
 */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Result, Button, Card } from "antd"
import "./style.css"

const { Meta } = Card

function Info(props) {
  const { list, isLoading } = useSelector((state) => state.movie)
  const { id } = props.match.params
  const [data, setData] = useState([])
  const { isLogin } = useSelector((state) => state.loginInfo)

  const handleBackClick = () => {
    props.history.goBack()
  }
  useEffect(() => {
    const result = list.find((item) => item.albumId === Number(id))
    setData(result)
    return () => null
  }, [id, list])

  // TODO: 登录状态刷新数据获取异常bug
  if (isLogin) {
    if (isLoading) {
      return (
        <h1>
          无法获取数据，请返回上一页
          <Button
            shape="round"
            onClick={handleBackClick}
            style={{ backgroundColor: "orange" }}
          >
            返回
          </Button>
        </h1>
      )
    }
    return (
      <Card
        title={data?.title}
        style={{ textAlign: "center", marginBottom: "10px" }}
        extra={
          <Button
            shape="round"
            onClick={handleBackClick}
            style={{ backgroundColor: "gainsboro" }}
          >
            返回
          </Button>
        }
      >
        <Meta description={data?.focus} />
        <div>
          <img
            alt="电影海报"
            src={data?.imageUrl}
            style={{ float: "left", margin: "10px 50px" }}
          />
          <p style={{ textAlign: "left", margin: "20px" }}>
            {data?.description}
          </p>
        </div>
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

export default Info
