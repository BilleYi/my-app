import React, { useState } from 'react';
import { Button, Avatar, Modal } from 'antd';
import { UserOutlined,CrownFilled  } from '@ant-design/icons';
import './style.css';
import LoginForm from './LoginForm';
import store from '../../store';
import axios from 'axios';
import { getLoginChangeAction } from '../../store/actionCreators';


const Login = () => {
    //弹出框逻辑

    //定义初始数据
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const [isLogin, setIsLogin] = useState(false);

    //redux数据获取
    const [state, setState] = useState(store.getState())

    function updateState() {
        store.subscribe(() => setState(store.getState()));//订阅reducer
    }
    
    
    

    //数据sessionStorage本地储存逻辑
    const saveState = (state) => {
        try {
            //判断登录状态，储存状态信息
            if (state.isLogin) {
                const serializedState = JSON.stringify(state);
                sessionStorage.setItem('state', serializedState);
            } else {
                const clearState = {
                    username: "",
                    password: "",
                    isLogin: false,
                };
                const serializedState = JSON.stringify(clearState);
                sessionStorage.setItem('state', serializedState);
            }
            
        } catch (err) {
            // ...错误处理
            console.error('Login saveState',err);
        }
    };
    //页面刷新或关闭
    window.onbeforeunload = (e) => {
        saveState(state);
    };

    const showModal = () => {
        if (state.isLogin) {
            async function loginOut(){
                const action = getLoginChangeAction(false);
                await store.dispatch(action);
                await updateState();
                console.log(state)
                alert('注销成功')
                console.log(state)
            }
            loginOut()
            
        }else {
            setIsModalVisible(true);
        }
        
    };
    //弹出框点击确认用户信息验证逻辑
    const handleOk = () => {
        
        async function InformationValidation() {
            await updateState();

            axios.get('https://dev-v2.bundleb2b.net/apidoc-server/app/mock/56/login')
            .then((res) => {
                // console.log('res is ',res.data.user)
                // console.log('state is ',state)
                const result = res.data.user;
                if (result.username === state.username) {
                    if (result.password === state.password) {
                        alert('登录成功')
                        setIsModalVisible(false);
                        const action = getLoginChangeAction(true);
                        store.dispatch(action);
                    } else alert('密码错误')
                } else alert('用户名错误')
                
            }).catch(error => console.error('Login-axios',error))
        }
        InformationValidation()
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div className="user-login">
            <Button type="primary" onClick={showModal}>
                {state.isLogin ? '注销' : '登录'}
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
                icon={state.isLogin ? <CrownFilled /> : <UserOutlined />}
            />
        </div>
        
    );
};

export default Login;