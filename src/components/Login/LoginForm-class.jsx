import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: '',
        }
    }


    //输入框用户名或密码改变向父组件传递最新数据
    userInfoChange = async (e) => {
        // console.log(e)
        if (e.username) {
            await this.setState({username: e.username})
            this.props.getMsg(this.state)
        }
        if (e.password) {
            await this.setState({password: e.password})
            this.props.getMsg(this.state)
        }
        
    }

    
    render() {
    
        return (
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onValuesChange={this.userInfoChange}
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
                    <Checkbox>{`${this.state.username}---${this.state.password}`}</Checkbox>
                </Form.Item>

            </Form>
        )
    }
}

export default LoginForm;