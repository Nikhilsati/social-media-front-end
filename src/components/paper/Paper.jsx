import React from 'react';
import { Paper as P, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	glass: {
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(10px)',
		borderColor: 'rgba(255, 255, 255, .15)'
	}
}));
const Paper = ({ children, glass, ...otherProps }) => {
	const classes = useStyles();
	return (
		<P
			elevation={0}
			classes={{
				root: glass ? classes.glass : ''
			}}
			{...otherProps}
		>
			{children}
		</P>
	);
};

export default Paper;
