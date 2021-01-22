import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import { HomeIcon } from '../icons/Icons';
const useStyles = makeStyles((theme) => ({
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	logo: {
		height: 40
	}
}));

const Header = () => {
	const classes = useStyles();
	return (
		<AppBar position="fixed">
			<Toolbar variant="regular" className={classes.flex}>
				<div className={classes.flex}>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<HomeIcon />
					</IconButton>
					<img className={classes.logo} src={require('../../assets/logo.png').default} alt="logo" />
				</div>
				<Typography variant="body1">Login</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
