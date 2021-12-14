/**
 * 统一创建action，提高代码可维护性
 */
import { CHANGE_LOGIN_VALUE, CHANGE_LOADING_VALUE } from './actionTypes'

const getLoginChangeAction = () => ({
  type: CHANGE_LOGIN_VALUE,
})

const getLoadingChangeAction = () => ({
  type: CHANGE_LOADING_VALUE,
})

export { getLoginChangeAction, getLoadingChangeAction }
