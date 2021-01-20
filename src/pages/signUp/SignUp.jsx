import React from 'react';
import Button from '../../components/button/Button';
import Textbox from '../../components/textbox/Textbox';
import Paper from '../../components/paper/Paper';
import { makeStyles, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
const useStyles = makeStyles((theme) => ({
	paper: {
		width: 1000,
		height: 550,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	form: {
		width: '50%',
		height: '80%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'column'
	}
}));
const initialValues = {
	name: '',
	email: '',
	password: '',
	MobileNumber: '',
	Birthday: ''
};
const onSubmit = (values) => {
	console.log('form values', values);
};
// const validate = function () {
// 	const formik = useFormik({
// 		initialValues,
// 		onSubmit,
// 		validate
// 	})
// }
const validate = (values) => {
	let errors = {};
	if (!values.name) {
		errors.name = 'Required';
	}
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email format';
	}
	if (!values.password) {
		errors.password = 'Required';
	}
	if (!values.MobileNumber) {
		errors.MobileNumber = 'Required';
	}
	if (!values.Birthday) {
		errors.Birthday = 'Required';
	}

	return errors;
};
const SignUp = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			MobileNumber: '',
			Birthday: ''
		},
		onSubmit: (values) => {
			console.log('form values', values);
		}
	});

	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<form className={classes.form} onSubmit={formik.handleSubmit}>
				<Textbox
					type="text"
					label="Name"
					name="name"
					placeholder="eg: Deepa"
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
				<Textbox
					type="email"
					label="Email"
					placeholder="eg: Deepa123@gmail.com"
					name="email"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<Textbox
					type="password"
					label="Password"
					name="password"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				<Textbox
					type="tel"
					label="Mobile Number"
					placeholder="xxx-xxxx-xxx"
					name="MobileNumber"
					onChange={formik.handleChange}
					value={formik.values.MobileNumber}
				/>
				<Textbox
					type="date"
					label="Birthday"
					name="Birthday"
					onChange={formik.handleChange}
					value={formik.values.Birthday}
				/>
				<Typography variant="body2" color="primary">
					Already have an account? Log In
				</Typography>
				<Button variant="contained" color="primary" fullWidth type="submit">
					SignUp
				</Button>
			</form>
		</Paper>
	);
};

export default SignUp;
