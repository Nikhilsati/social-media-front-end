import axios from 'axios';

const API_URL = 'http://localhost:4000/api/auth/';
export const login = (email, password) => {
	axios
		.post(API_URL + 'login', {
			email,
			password
		})
		.then((res) => {
			localStorage.setItem('user', res.headers['auth-token']);
			return res.headers['auth-token'];
		})
}
	

export const register = ({ name, email, password, mobile, DOB }) =>
	axios
		.post(API_URL + 'register', {
			name,
			email,
			password,
			mobile,
			DOB
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err));

export const logOut = () => {
	localStorage.removeItem('user');
};
