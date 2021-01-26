import { REGISTRATION_SUCCESSFUL, REGISTRATION_FAIL, LOGIN_SUCCESSFUL, LOGIN_FAIL, LOGOUT } from './types';
import { login } from '../services/auth.service';
import { setMessage, clearMessage } from './message';
export const registrationSuccess = () => ({ type: REGISTRATION_SUCCESSFUL });
export const registrationFail = () => ({ type: REGISTRATION_FAIL });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESSFUL, payload: user });
export const loginFail = () => ({ type: LOGIN_FAIL });
export const logout = () => ({ type: LOGOUT });


export const userLogin = (email, password) => (dispatch) => {
    const user = localStorage.getItem("user");
    if(user) {
        dispatch(loginSuccess(user))
        dispatch(setMessage("Successfully LoggedIn"))
        setTimeout(() => dispatch(clearMessage()), 5000)
    }
    else {
        login(email, password)
            .then(result => {
                dispatch(loginSuccess(result))
                console.log("login successful", result)
            })
            .catch(error => {
                dispatch(loginFail())
                console.log("login failed")
            })    
    }
}