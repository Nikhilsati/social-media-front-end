import './App.css';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Paper from './components/paper/Paper';
import Header from './components/header/Header';
import SignUp from './pages/signUp/SignUp';
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
				<SignUp />
			</header>
		</div>
	);
}

export default App;
