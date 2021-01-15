import React from 'react';
import Button from '../../components/button/Button';
import Textbox from '../../components/textbox/Textbox';
import Paper from '../../components/paper/Paper';
import { makeStyles, Typography } from '@material-ui/core';
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
const SignUp = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<form className={classes.form}>
				<Textbox type="text" label="Name" placeholder="eg: Deepa" />
				<Textbox type="email" label="Email" placeholder="eg: Deepa123@gmail.com" />
				<Textbox type="password" label="Password" />
				<Textbox type="tel" label="mobileNumber" placeholder="xxx-xxxx-xxx" />
				<Textbox type="date" label="Birthday" />
				<Typography variant="body2" color="primary">
					Already have an account? Log In
				</Typography>
				<Button variant="contained" color="primary" fullWidth>
					SignUp
				</Button>
			</form>
		</Paper>
	);
};

export default SignUp;
