import './App.css';
import { makeStyles } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
// import Paper from './components/paper/Paper';
import Header from './components/header/Header';
import Login from './pages/login/Login';
import Timeline from './components/timeline/Timeline';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSeletor } from 'react-redux';
import Friend from './pages/friend/Friend';
import Demo from './pages/friend/Demo';
import {
	ArrowDropUpIcon,
	ArrowDropDownIcon,
	AccountBalanceIcon,
	AddIcon,
	BookmarkBorderIcon,
	BrightnessIcon,
	CameraIcon,
	FilterCenterFocusIcon,
	HomeIcon,
	SendIcon,
	TagFacesIcon,
	LikeIcon,
	UserIcon
} from './components/icons/Icons.js';
const useStyles = makeStyles({
	root: {
		// backgroundColor: "black"
	}
});

function App() {
	const classes = useStyles();

	const icons = [
		{
			icon: <AccountBalanceIcon />
		},
		{
			icon: <AddIcon />
		},
		{
			icon: <BookmarkBorderIcon />
		},
		{
			icon: <CameraIcon />
		},
		{
			icon: <HomeIcon />
		},
		{
			icon: <SendIcon />
		},
		{
			icon: <TagFacesIcon />
		},
		{
			icon: <LikeIcon />
		},
		{
			icon: <UserIcon />
		}
	];
	return (
		<div className={classes.root}>
			<Header />
			<Friend />
			<Demo />
		</div>
	);
}

export default App;
//extra
/* <header className="App-header">
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
				</Switch> */
//	<Timeline icons = {icons} />  */}
