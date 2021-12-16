import React, { useState } from "react"
import axios from "axios"
import { Button, Avatar, Modal, message } from "antd"
import { UserOutlined, CrownFilled } from "@ant-design/icons"
import { useSelector, useDispatch } from "react-redux"
import { getLoginChangeAction } from "../../store/features/loginSlice"
import "./style.css"
import LoginForm from "./LoginForm-class"

const Login = function () {
  // 弹出框逻辑

  // 定义弹出框展示初始值
  const [isModalVisible, setIsModalVisible] = useState(false)

  // redux数据获取
  const { isLogin } = useSelector((state) => state.loginInfo)

  const dispatch = useDispatch()

  // 定义用户初始信息
  const [info, setInfo] = useState({})

  // 数据sessionStorage本地储存逻辑
  const saveState = () => {
    try {
      // 储存登录状态信息
      const serializedState = JSON.stringify({ isLogin })
      sessionStorage.setItem("state", serializedState)
    } catch (err) {
      // ...错误处理
      console.error("Login saveState", err)
    }
  }
  // 页面刷新或关闭时
  window.onbeforeunload = () => {
    saveState(isLogin)
  }

  // 弹出框开关逻辑
  const showModal = () => {
    if (isLogin) {
      Promise.resolve()
        .then(() => {
          dispatch(getLoginChangeAction())
        })
        .then(() => {
          message.success("注销成功", 2)
        })
    } else {
      setIsModalVisible(true)
    }
  }
  // 弹出框点击确认验证用户信息逻辑
  const handleOk = () => {
    function InformationValidation() {
      axios
        .get("/login")
        .then((res) => {
          // console.log('res is ',res.data.user)
          // console.log('state is ',state)
          const result = res.data.user
          if (result.username === info.username) {
            if (result.password === info.password) {
              message.success("登录成功", 2)
              setIsModalVisible(false)
              dispatch(getLoginChangeAction())
            } else message.error("密码错误", 2)
          } else message.error("用户名错误", 2)
        })
        .catch((error) => console.error("Login-axios", error))
    }
    InformationValidation()
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  // 获取子组件传值更新info
  const getMessage = (data) => {
    // console.log(data)
    setInfo(data)
    // console.log(info)
  }

  return (
    <div className="user-login">
      <Button type="primary" onClick={showModal}>
        {isLogin ? "注销" : "登录"}
      </Button>
      <Modal
        title="请登录"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
      >
        <LoginForm getMsg={getMessage} />
      </Modal>
      <Avatar
        className="login-avatar"
        icon={
          isLogin ? (
            <CrownFilled style={{ color: "yellow" }} />
          ) : (
            <UserOutlined />
          )
        }
      />
    </div>
  )
}

export default Login
