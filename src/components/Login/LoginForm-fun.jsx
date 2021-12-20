import React, { useState, useEffect } from "react"
import { Form, Input, Checkbox } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
// TODO: 使用函数组件实现
export default function LoginForm() {
  // 表单逻辑

  const [data, setData] = useState({
    username: "",
    password: "",
  })

  // 输入框用户名或密码改变更新redux数据
  const userInfoChange = (e) => {
    if (e.username || e.password) {
      setData({
        username: e.username,
        password: e.password,
      })
    }
  }

  useEffect(() => {
    console.log(data)
  })

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onValuesChange={userInfoChange}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "请输入用户名",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "请输入密码",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>记住密码</Checkbox>
      </Form.Item>
    </Form>
  )
}
