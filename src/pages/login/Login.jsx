import React from 'react';
import Button from '../../components/button/Button';
import Textbox from '../../components/textbox/Textbox';
import Paper from '../../components/paper/Paper';
import { makeStyles, Typography } from '@material-ui/core';
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
	return (
		<Paper glass className={classes.paper}>
			<form className={classes.form}>
				<Textbox label="Email" type="email" placeholder="enter email" />
				<Textbox label="Password" type="password" placeholder="enter password" />
				<div className={classes.flex}>
					<Typography variant="body2" color="error">
						Forget Password?
					</Typography>
					<Typography variant="body2" color="primary">
						Don't have an account? Sign Up
					</Typography>
				</div>

				<Button color="primary" variant="contained">
					Login
				</Button>
			</form>
		</Paper>
	);
};

export default Login;
