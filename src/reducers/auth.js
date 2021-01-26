import { REGISTRATION_SUCCESSFUL, REGISTRATION_FAIL, LOGIN_SUCCESSFUL, LOGIN_FAIL, LOGOUT } from '../actions/types';

const user = localStorage.getItem("user");

console.log(user)
const initialState = user
  ? { isLoggedIn: true, user: user }
  : { isLoggedIn: false, user: null };

const reducer = ( state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTRATION_SUCCESSFUL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}

export default reducer;