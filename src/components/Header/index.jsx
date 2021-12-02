/**
 * 头部组件
 */
import React, { Fragment, useState } from "react";
import logo from "./logo.png";
import './style.css';
import { Menu } from 'antd';
import { MailOutlined,TwitterOutlined,WechatOutlined,BookOutlined } from '@ant-design/icons';

//HOOK使用
function AppHeader(){
    const [list, setList] = useState([
        {id: 1, icon: <MailOutlined />, title: '邮件'},
        {id: 2, icon: <TwitterOutlined />, title: '推特'},
        {id: 3, icon: <WechatOutlined />, title: '微信'},
        {id: 4, icon: <BookOutlined />, title: '图书'},
    ]);

    function getMenuItems() {
        return list.map(item => {
            return (
                <Menu.Item 
                key={item.id} 
                icon={item.icon}
                >
                {item.title}
                </Menu.Item>
            )
        });
    };

    return(
        <Fragment>
             <img className="app-header-logo" alt="logo" src= {logo}/>
            <Menu className="app-header-menu" mode="horizontal">
               {getMenuItems()}
            </Menu>
        </Fragment>
       
    )
}

export default AppHeader;