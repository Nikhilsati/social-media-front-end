import './App.css';
// import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Paper, Grid } from '@material-ui/core';
import Button from './components/button/Button';
import Textbox from './components/textbox/Textbox';
const useStyles = makeStyles({
	root: {
		// backgroundColor: "black"
	}
});

function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<header className="App-header">
				<Paper
					elevation={0}
					style={{
						width: 1000,
						height: 500,
						backgroundColor: 'rgba(255, 255, 255, .15)',
						backdropFilter: 'blur(5px)',
						borderColor: 'rgba(255, 255, 255, .15)'
					}}
				>
					<Grid container justify="center" spacing={3}>
						<Grid item xl={6}>
							<Button color="error" rounded>
								Hello
							</Button>
							<Textbox color="success" fullwidth label="hello" />
						</Grid>
					</Grid>
				</Paper>
			</header>
		</div>
	);
}

export default App;