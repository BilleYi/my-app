import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';

//redux开发者工具配置
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
)

const store = createStore(//创建store
    reducer,//导入reducer
    enhancer
);

export default store;