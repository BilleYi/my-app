import { CHANGE_LOGIN_VALUE, CHANGE_LOADING_VALUE } from './actionTypes'

const defaultState = {
  isLogin: false,
  isLoading: true,
}

const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_LOGIN_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.isLogin = !newState.isLogin
    return newState
  }

  if (action.type === CHANGE_LOADING_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.isLoding = !newState.isLoding
    return newState
  }

  return state
}

export default reducer
