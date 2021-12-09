/**
 * 统一创建action，提高代码可维护性
 */
import { CHANGE_LOGIN_VALUE } from "./actionTypes"

const getLoginChangeAction = (value) => ({
    type: CHANGE_LOGIN_VALUE,
    value,
})

export { getLoginChangeAction };