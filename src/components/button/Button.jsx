import React from 'react';
import { Button as Btn, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: ({ rounded }) => (rounded ? 20 : 0),
		boxShadow: ({ color }) => `0px 4px 6px -4px ${theme.palette[color ? color : 'primary'].light}`
	},
	outlined: {
		borderColor: ({ color }) => theme.palette[color ? color : 'primary'].main
	},
	contained: {
		backgroundColor: ({ color }) => theme.palette[color ? color : 'primary'].main,
		color: ({ color }) => theme.palette[color ? color : 'primary'].contrastText,
		'&:hover': {
			backgroundColor: ({ color }) => theme.palette[color ? color : 'primary'].dark
		}
	}
}));
const Button = ({ color, variant, disabled, endIcon, startIcon, href, size, rounded, ...otherProps }) => {
	const classes = useStyles({ color, rounded });
	return (
		<Btn
			variant={variant}
			color={color}
			disableElevation
			disableRipple
			disabled={disabled}
			endIcon={endIcon}
			startIcon={startIcon}
			href={href}
			size={size}
			classes={{
				root: classes.root,
				outlined: classes.outlined,
				contained: classes.contained
			}}
			{...otherProps}
		>
			Click me
		</Btn>
	);
};
Button.propTypes = {
	color: PropTypes.oneOf([ 'primary', 'secondary', 'success', 'error', 'warning' ])
};
export default Button;
