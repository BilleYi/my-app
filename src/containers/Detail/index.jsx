import React, { useState } from 'react';
import store from '../../store';
import { Result, Button } from 'antd';


function Detail(props){
    //redux数据获取
    const [state, setState] = useState(store.getState())
    const handleStoreChange = () => {//store数据更新事件
        setState(store.getState());
    }
    store.subscribe(handleStoreChange);//订阅reducer

    const handleBackClick = () => {
        props.history.goBack();
    }


    if (state.isLogin) {
        return <h1>Detail-page:{props.match.params.id}</h1>
    } else {
        return (
                <Result
                    status="403"
                    title="403"
                    subTitle="抱歉，您无权访问此页面"
                    extra={<Button type="primary" onClick={handleBackClick}>返回</Button>}
                />
        )
    }

    
}

export default Detail;