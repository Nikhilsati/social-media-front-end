import './App.css';
import { makeStyles } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
// import Paper from './components/paper/Paper';
import Header from './components/header/Header';
import Login from './pages/login/Login';
const useStyles = makeStyles({
	root: {
		// backgroundColor: "black"
	}
});

function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<header className="App-header">
				<Login />
			</header>
		</div>
	);
}

export default App;
