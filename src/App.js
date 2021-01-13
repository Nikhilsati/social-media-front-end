import './App.css';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Paper from './components/paper/Paper';
import Header from './components/header/Header';
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
				<Paper
					style={{
						width: 1000,
						height: 500
					}}
				>
					<Grid container justify="center" spacing={3}>
						<Grid item xl={6} />
					</Grid>
				</Paper>
			</header>
		</div>
	);
}

export default App;
