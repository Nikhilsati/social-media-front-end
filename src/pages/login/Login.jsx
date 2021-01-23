import React from 'react';
import Button from '../../components/button/Button';
import Textbox from '../../components/textbox/Textbox';
import Paper from '../../components/paper/Paper';
import { makeStyles, Typography } from '@material-ui/core';
import { Formik } from 'formik';

const useStyles = makeStyles((theme) => ({
	flex: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between'
	},
	paper: {
		width: 750,
		height: 500,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	form: {
		width: '50%',
		height: '50%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'column'
	}
}));

const Login = () => {
	const classes = useStyles();

	const validateLogin = (values) => {
		const errors = {};
		// for email
		if (!values.email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
		}
		// for password
		if (!values.email) {
			errors.password = 'Required';
		} else if (values.password.length < 6) {
			errors.password = 'Too Short';
		}
		return errors;
	};

	const onSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	};
	return (
		<Paper glass className={classes.paper}>
			<Formik initialValues={{ email: '', password: '' }} validate={validateLogin} onSubmit={onSubmit}>
				{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<form className={classes.form} onSubmit={handleSubmit}>
						<Textbox
							label="Email"
							type="email"
							name="email"
							placeholder="Enter Email"
							error={errors.email && touched.email && errors.email}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						<Textbox
							label="Password"
							type="password"
							name="password"
							error={errors.password && touched.password && errors.password}
							placeholder="Enter Password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.passsword}
						/>
						<div className={classes.flex}>
							<Typography variant="body2" color="error">
								Forget Password?
							</Typography>
							<Typography variant="body2" color="primary">
								Don't have an account? Sign Up
							</Typography>
						</div>

						<Button type="submit" color="primary" variant="contained" disabled={isSubmitting}>
							Login
						</Button>
					</form>
				)}
			</Formik>
		</Paper>
	);
};

export default Login;
