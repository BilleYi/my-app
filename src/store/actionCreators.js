/**
 * 统一创建action，提高代码可维护性
 */
import { CHANGE_USERNAME_VALUE, CHANGE_PASSWORD_VALUE, CHANGE_LOGIN_VALUE } from "./actionTypes"

const getUsernameChangeAction = (value) => ({
    type: CHANGE_USERNAME_VALUE,
    value,
})

const getPasswordChangeAction = (value) => ({
    type: CHANGE_PASSWORD_VALUE,
    value,
})

const getLoginChangeAction = (value) => ({
    type: CHANGE_LOGIN_VALUE,
    value,
})


export { getUsernameChangeAction, getPasswordChangeAction, getLoginChangeAction };