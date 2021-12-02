const defaultState = {
	countValue: 0
}

const reducer = (state = defaultState, action) => {
	if(action.type === 'count_change'){
		const newState = JSON.parse(JSON.stringify(state))
		newState.countValue = action.value
		return newState;
	}
	return state;
}

export default reducer;