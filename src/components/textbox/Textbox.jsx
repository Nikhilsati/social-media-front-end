import React from 'react';
import { InputBase, InputLabel, makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	div: {
		width: '100%',
		position: 'relative'
	},
	input: {
		borderBottom: '1px solid black',
		borderBottomColor: ({ color }) => theme.palette[color ? color : 'primary'].main
	},
	label: {
		color: ({ color }) => theme.palette[color ? color : 'primary'].main
	},
	error: {
		position: 'absolute'
	}
}));
const Textbox = ({ color, disabled, label, fullWidth, placeholder, required, type, value, error, ...otherProps }) => {
	const classes = useStyles({ color });
	return (
		<div className={classes.div}>
			{label ? (
				<InputLabel
					classes={{
						root: classes.label
					}}
				>
					{label}
				</InputLabel>
			) : (
				''
			)}
			<InputBase
				color={color}
				disabled={disabled}
				fullWidth={fullWidth}
				placeholder={placeholder}
				required
				type={type}
				value={value}
				classes={{
					root: classes.div,
					input: classes.input
				}}
				{...otherProps}
			/>
			<Typography className={classes.error} variant="body2" color="error">
				{error}
			</Typography>
		</div>
	);
};

export default Textbox;
