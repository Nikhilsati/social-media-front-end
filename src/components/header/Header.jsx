import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, makeStyles } from '@material-ui/core';
import { HomeIcon } from '../icons/Icons';
const useStyles = makeStyles((theme) => {});

const Header = () => {
	const classes = useStyles();
	return (
		<AppBar position="fixed">
			<Toolbar>
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					<HomeIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					News
				</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
