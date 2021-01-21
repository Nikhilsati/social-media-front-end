import { CHANGE_MODE } from '../actions/types';
const initialState = { mode: 'light' };
const reducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case CHANGE_MODE:
			if (state.mode === 'light') return { mode: 'dark' };
			return { mode: 'light' };
		default:
			return state;
	}
};
export default reducer;
