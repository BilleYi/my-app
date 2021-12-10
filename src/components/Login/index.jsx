import React, { useState, useEffect } from 'react';
import { Button, Avatar, Modal, message } from 'antd';
import { UserOutlined,CrownFilled  } from '@ant-design/icons';
import './style.css';
import LoginForm from './LoginForm-class';
import store from '../../store';
import axios from 'axios';
import { getLoginChangeAction } from '../../store/actionCreators';


const Login = () => {
    //弹出框逻辑

    //定义弹出框展示初始值
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const [isLogin, setIsLogin] = useState(false);

    //redux数据获取
    const [state, setState] = useState(store.getState())
    //订阅reducer
    store.subscribe(() => setState(store.getState()));
    //定义用户初始信息
    const [info, setInfo] = useState({value:'null'})
    
    
    //数据sessionStorage本地储存逻辑
    const saveState = (state) => {
        try {
            //判断登录状态，储存状态信息
            if (state.isLogin) {
                const serializedState = JSON.stringify(state);
                sessionStorage.setItem('state', serializedState);
            } else {
                const clearState = {
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
    //页面刷新或关闭时
    window.onbeforeunload = (e) => {
        saveState(state);
    };

    //弹出框开关逻辑
    const showModal = () => {
        if (state.isLogin) {
            async function loginOut(){
                const action = getLoginChangeAction();
                await store.dispatch(action);
                message.success('注销成功', 2)
            }
            loginOut()
            
        }else {
            setIsModalVisible(true);
        }
        
    };
    //弹出框点击确认验证用户信息逻辑
    const handleOk = () => {
        
        function InformationValidation() {
            
            axios.get('https://dev-v2.bundleb2b.net/apidoc-server/app/mock/56/login')
            .then((res) => {
                // console.log('res is ',res.data.user)
                // console.log('state is ',state)
                const result = res.data.user;
                if (result.username === info.username) {
                    if (result.password === info.password) {
                        message.success('登录成功',2)
                        setIsModalVisible(false);
                        const action = getLoginChangeAction();
                        store.dispatch(action);
                    } else message.error('密码错误', 1)
                } else message.error('用户名错误',1)
                
            }).catch(error => console.error('Login-axios',error))
        }
        InformationValidation()
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //获取子组件传值更新info
    const getMessage = data => {
        // console.log(data)
        setInfo(data)
        // console.log(info)
    }

    useEffect(() => {
        // console.log('uef',info)
        return () => setInfo({});
    },[])

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
                <LoginForm getMsg={getMessage}/>
            </Modal>
            <Avatar 
            className="login-avatar"
                icon={state.isLogin ? <CrownFilled style={{color:'yellow'}}/> : <UserOutlined />}
            />
        </div>
        
    );
};

export default Login;