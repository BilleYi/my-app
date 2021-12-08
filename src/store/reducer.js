import { CHANGE_USERNAME_VALUE, CHANGE_PASSWORD_VALUE, CHANGE_LOGIN_VALUE } from './actionTypes'

const defaultState = {
	username: "",
	password: "",
	isLogin: false,
}

const reducer = (state = defaultState, action) => {
	if (action.type === CHANGE_USERNAME_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.username = action.value;
		return newState;
	}

	if (action.type === CHANGE_PASSWORD_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.password = action.value;
		return newState;
	}

	if (action.type === CHANGE_LOGIN_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.isLogin = action.value;
		return newState;
	}


	return state;
}

export default reducer;