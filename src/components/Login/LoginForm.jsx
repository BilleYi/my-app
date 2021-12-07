import React, { useState, useEffect} from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import store from '../../store';
import { getUsernameChangeAction, getPasswordChangeAction } from '../../store/actionCreators';

export default function LoginForm(props) {
    //表单逻辑
    //redux逻辑
    const [data, setData] = useState(store.getState());

    const handleStoreChange = () => {//store数据更新事件
        setData(store.getState());
    }

    store.subscribe(handleStoreChange);//订阅reducer

    // useEffect(() => {
    //     console.log(data)
    // },[])

    //输入框用户名或密码改变
    const userInfoChange = (e) => {
        if (e.username) {
            const action = getUsernameChangeAction(e.username);
            store.dispatch(action);
            
        }
        if (e.password) {
            const action = getPasswordChangeAction(e.password);
            store.dispatch(action);
        }
        
    }

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
                        message: '请输入用户名',
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
                        message: '请输入密码',
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
