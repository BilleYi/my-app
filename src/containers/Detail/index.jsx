import React, { useState } from 'react';
import store from '../../store';


function Detail(props){
    //redux数据获取
    const [state, setState] = useState(store.getState())
    const handleStoreChange = () => {//store数据更新事件
        setState(store.getState());
    }
    store.subscribe(handleStoreChange);//订阅reducer


    if (state.isLogin) {
        return <h1>Detail-page:{props.match.params.id}</h1>
    } else {
        return <h1>未登录</h1>
    }

    
}

export default Detail;