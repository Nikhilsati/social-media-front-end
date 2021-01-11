import React from 'react';
import { InputBase, InputLabel, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	input: {
		borderBottom: '1px solid black',
		borderBottomColor: ({ color }) => theme.palette[color ? color : 'primary'].main
	},
	label: {
		color: ({ color }) => theme.palette[color ? color : 'primary'].main
	}
}));
const Textbox = ({ color, disabled, label, fullWidth, placeholder, required, type, value }) => {
	const classes = useStyles({ color });
	return (
		<div>
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
					input: classes.input
				}}
			/>
		</div>
	);
};

export default Textbox;
