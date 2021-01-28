import React from 'react';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core/';
// import FolderIcon from '@material-ui/icons/Folder';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: 8
	},
	label: {
		...theme.typography.caption,
		lineHeight: '18px'
	}
}));
const Timeline = ({ icons, ...otherProps }) => {
	const classes = useStyles();
	
	return (
		<BottomNavigation className={classes.root}  { ...otherProps } >
			{
				icons.map( icon => <BottomNavigationAction classes = {{
					label: classes.label
				}} {...icon} />)
			}
			
		</BottomNavigation>
	);
};

export default Timeline;
