import './App.css';
// import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Paper, Grid } from '@material-ui/core';
import Button from './components/button/Button';
import Textbox from './components/textbox/Textbox';
import Card from './components/card/Card';
import Timeline from './components/timeline/Timeline';
const useStyles = makeStyles({
	root: {
		// backgroundColor: "black"
	}
});

function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper
				elevation={0}
				style={{
					width: '70%',
					backgroundColor: 'rgba(255, 255, 255, .15)',
					backdropFilter: 'blur(5px)',
					borderColor: 'rgba(255, 255, 255, .15)',
					margin: 'auto'
				}}
			>
				<Grid container justify="center" spacing={3}>
					<Grid item xl={10}>
						{/* <Button color="error" rounded>
								Hello
							</Button>
							<Textbox color="success" fullwidth label="hello" /> */}
						{/* <Card
							avatar={{
								src: 'https://cdn.pixabay.com/photo/2016/12/19/21/36/winters-1919143_1280.jpg'
							}}
							title="new photo uploaded"
							postImage="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg"
							date={new Date().toDateString()}
						/>
						<br />
						<Card
							avatar={{
								src: 'https://cdn.pixabay.com/photo/2018/11/06/14/01/pair-3798371_1280.jpg'
							}}
							title="new photo uploaded"
							postImage="https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600_1280.jpg"
							date={new Date().toDateString()}
						/> */}
						<Timeline />
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}

export default App;
