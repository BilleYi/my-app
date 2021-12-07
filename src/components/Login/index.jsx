import React, { useState } from 'react';
import { Button, Avatar, Modal } from 'antd';
import { UserOutlined,CrownFilled  } from '@ant-design/icons';
import './style.css';
import LoginForm from './LoginForm';
import store from '../../store';
import axios from 'axios';


const Login = () => {
    //弹出框逻辑
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    // let state;
    // const getNewState = () => {
        
    // }

    const [state, setState] = useState(store.getState())
    const handleStoreChange = () => {//store数据更新事件
        setState(store.getState());
    }
    store.subscribe(handleStoreChange);//订阅reducer

    const showModal = () => {
        if (isLogin) {
            alert('注销成功')
            setIsLogin(false);
        }else {
            setIsModalVisible(true);
        }
        
    };

    const handleOk = () => {
        
        async function InformationValidation() {
            axios.get('https://dev-v2.bundleb2b.net/apidoc-server/app/mock/56/login')
            .then((res) => {
                // console.log('res is ',res.data.user)
                // console.log('state is ',state)
                const result = res.data.user;
                if (result.username === state.username) {
                    if (result.password === state.password) {
                        alert('登录成功')
                        setIsModalVisible(false);
                        setIsLogin(true);
                    } else alert('密码错误')
                } else alert('用户名错误')
                
            })
        }
        InformationValidation()
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div className="user-login">
            <Button type="primary" onClick={showModal}>
                {isLogin ? '注销' : '登录'}
            </Button>
            <Modal 
                title="请登录" 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel} 
                okText="确定" 
                cancelText="取消"
            >
                <LoginForm />
            </Modal>
            <Avatar 
            className="login-avatar"
                icon={isLogin ? <CrownFilled /> : <UserOutlined />}
            />
        </div>
        
    );
};

export default Login;