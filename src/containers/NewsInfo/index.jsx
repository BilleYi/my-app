import React, { useEffect } from "react"
// import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { List } from "antd"
import { Link } from "react-router-dom"
import { loadData } from "../../store/features/movieSlice"
import "./style.css"

export default function NewsInfo() {
  // const [data, setData] = useState([])
  // const { isLogin } = useSelector((state) => state.loginInfo)
  // const [isLoading, setIsLoading] = useState(true)

  const { list, isLoading } = useSelector((state) => state.movie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadData()) // 获取影片数据
  }, [dispatch])

  // return (
  //     <ul>
  //       {list.map((item) => (
  //         <li key={item.tvId}>{item.name}</li>
  //       ))}
  //     </ul>
  // )

  // useEffect(() => {
  //   let isMounted = true
  //   // 从后端获取JSON数据
  //   axios
  //     .get("/pages/3")
  //     .then((res) => {
  //       if (isMounted) {
  //         setData(res.data.result)
  //         setIsLoading(false)
  //       }
  //     })
  //     .catch((err) => console.error("NewsInfo", err))

  //   return () => {
  //     isMounted = false
  //   }
  // }, [])

  return (
    <div>
      <List
        className="news-info"
        size="small"
        bordered
        dataSource={list}
        loading={isLoading}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/pages/3/info/${item.tvId}`}>{item.title}</Link>
          </List.Item>
        )}
      />
    </div>
  )
}
