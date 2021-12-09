import { CHANGE_LOGIN_VALUE } from './actionTypes'

const defaultState = {
	isLogin: false,
}

const reducer = (state = defaultState, action) => {

	if (action.type === CHANGE_LOGIN_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.isLogin = action.value;
		return newState;
	}

	return state;
}

export default reducer;