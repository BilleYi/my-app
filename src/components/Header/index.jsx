/**
 * 头部组件
 */
import React, { Fragment, useEffect, useState } from "react";
import logo from "./logo1.png";
import './style.css';
import { Menu, } from 'antd';
import axios from "axios";
import { MailOutlined, TwitterOutlined, WechatOutlined, } from '@ant-design/icons';
import { Link } from 'react-router-dom';

//HOOK使用
function AppHeader(props) {
    // const [list, setList] = useState([//假数据模拟
    //     {id: 1, icon: 'MailOutlined', title: '邮件'},
    //     {id: 2, icon: 'TwitterOutlined', title: '推特'},
    //     {id: 3, icon: 'WechatOutlined', title: '微信'},
    //     {id: 4, icon: 'BookOutlined', title: '图书'},
    // ]);
    
    //使用HOOKS
    const [list, setList] = useState([]);
    
    useEffect(() => {
        let isMounted = true;
        //从后端获取JSON数据
        axios.get('https://dev-v2.bundleb2b.net/apidoc-server/app/mock/56/headermenus')
        .then(res => {
            if (isMounted) {
                setList(res.data.data);
            }
        })
        .catch(err => console.error('Header',err));
        return () => isMounted = false;
    },[])

    //通过循环遍历返回需要渲染的组件
    function getMenuItems() {
        return list.map(item => {
            //从后台获取JSON数据，通过icon值匹配对应的icon组件并返回 
            let icon;   
            switch (item.icon){
                case 'MailOutlined':
                    icon = <MailOutlined />
                    break;
                case 'TwitterOutlined':
                    icon = <TwitterOutlined />
                    break;
                case 'WechatOutlined':
                    icon = <WechatOutlined />
                    break;
                default:
                    console.log('没有匹配相应的ICON');
                    icon = null
            }
                
            return (
                
                    <Menu.Item 
                    key={item.id} 
                    icon={icon}
                    >
                    <Link to={`/pages/${item.id}`}>
                    {item.title}
                    </Link>
                    </Menu.Item>
                
                
            )
        });
    };
    // console.log(Array.isArray(getMenuItems()))//true
    // console.log(...getMenuItems());
    // console.log(...list);
    return(
        <Fragment>
            <Link to="/">
                <img className="app-header-logo" alt="logo" src= {logo}/>
            </Link>
            <Menu className="app-header-menu" mode="horizontal">
                {getMenuItems()}  
            </Menu>
        </Fragment>

    )
}

export default AppHeader;